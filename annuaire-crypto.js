// Annuaire chiffre : aucune phrase d'acces ni fiche en clair dans ce fichier.
window.IUTAnnuaire = (() => {
  const cacheName = 'iutCumanaAnnuaireCleV1';
  const decode = value => Uint8Array.from(atob(value), c => c.charCodeAt(0));
  const encode = value => btoa(String.fromCharCode(...new Uint8Array(value)));
  const payload = () => {
    const p = window.IUT_ENCRYPTED;
    if (!p || p.version !== 1 || p.iterations !== 600000) throw new Error('Fichier chiffre manquant ou incompatible.');
    return p;
  };
  const fingerprint = p => p.salt + ':' + p.iv;
  async function decrypt(key, p) {
    const bytes = await crypto.subtle.decrypt({name:'AES-GCM', iv:decode(p.iv), additionalData:new TextEncoder().encode('IUT-Cumana-annuaire-v1')}, key, decode(p.data));
    const rows = JSON.parse(new TextDecoder('utf-8', {fatal:true}).decode(bytes));
    if (!Array.isArray(rows) || rows.length !== p.count || rows.some(r => !r || typeof r !== 'object' || typeof r.nom !== 'string')) throw new Error('Donnees invalides.');
    return rows;
  }
  async function unlock(phrase) {
    if (!globalThis.crypto?.subtle) throw new Error('Ouvrez ce test sur localhost ou en HTTPS.');
    const p = payload();
    const material = await crypto.subtle.importKey('raw', new TextEncoder().encode(phrase), 'PBKDF2', false, ['deriveKey']);
    const key = await crypto.subtle.deriveKey({name:'PBKDF2', salt:decode(p.salt), iterations:p.iterations, hash:'SHA-256'}, material, {name:'AES-GCM', length:256}, true, ['decrypt']);
    const rows = await decrypt(key,p);
    try { sessionStorage.setItem(cacheName, JSON.stringify({fingerprint:fingerprint(p), key:encode(await crypto.subtle.exportKey('raw',key))})); } catch (_) {}
    return rows;
  }
  async function restore() {
    try {
      const p=payload(), saved=JSON.parse(sessionStorage.getItem(cacheName)||'null');
      if (!saved || saved.fingerprint!==fingerprint(p)) return null;
      const key=await crypto.subtle.importKey('raw',decode(saved.key),'AES-GCM',false,['decrypt']);
      return await decrypt(key,p);
    } catch (_) { try { sessionStorage.removeItem(cacheName); } catch (_) {} return null; }
  }
  function forget() { try { sessionStorage.removeItem(cacheName); } catch (_) {} }
  return {unlock,restore,forget};
})();
