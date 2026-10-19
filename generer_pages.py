#!/usr/bin/env python3
"""Génère les deux pages publiques à partir d'un HTML source et de langues.js.
Exécuter dans le dossier du site : py generer_pages.py
"""
from pathlib import Path
import html, json, re

BASE = Path(__file__).resolve().parent
source = (BASE / 'index_source.html').read_text(encoding='utf-8')
js = (BASE / 'langues.js').read_text(encoding='utf-8')
match = re.search(r'const traductions\s*=\s*(\{.*?\})\s*;', js, re.S)
if not match:
    raise SystemExit('Dictionnaire de traductions introuvable dans langues.js')
translations = json.loads(match.group(1))

metadata = {
    'fr': {'url':'https://iut-cumana.fr/', 'locale':'fr_FR', 'image':'https://iut-cumana.fr/photos/bandeau-partage-fr.jpg', 'image_alt':"Les coopérants français de l'IUT de Cumaná – Coopération France-Venezuela",
           'title':'Coopérants français — IUT de Cumaná (1973–1981)',
           'description':'Mémoire des coopérants français et VSNA de l’IUT de Cumaná au Venezuela entre 1973 et 1981 : histoire, témoignages, photographies et archives.'},
    'es': {'url':'https://iut-cumana.fr/es/', 'locale':'es_VE', 'image':'https://iut-cumana.fr/photos/bandeau-partage-es.jpg', 'image_alt':'Los cooperantes franceses del IUT de Cumaná – Cooperación Francia-Venezuela',
           'title':'Cooperantes franceses — IUT de Cumaná (1973–1981)',
           'description':'Memoria de los cooperantes franceses y VSNA del IUT de Cumaná, Venezuela, entre 1973 y 1981: historia, testimonios, fotografías y archivos.'},
}

def set_tag_content(text, key, value):
    pat = r'(<([a-zA-Z][\w-]*)\b[^>]*\bdata-i18n="'+re.escape(key)+r'"[^>]*>)(.*?)(</\2>)'
    return re.sub(pat, lambda m: m.group(1)+value+m.group(4), text, flags=re.S)

def render(code):
    doc = source
    for key, value in translations[code].items():
        doc = set_tag_content(doc, key, value)
        # Attributes with data-i18n-aria: replace aria-label wherever located.
        tag_pat = r'<[^>]*\bdata-i18n-aria="'+re.escape(key)+r'"[^>]*>'
        def replace_aria(m):
            tag=m.group(0)
            val=html.escape(value, quote=True)
            if re.search(r'\baria-label="[^"]*"',tag):
                return re.sub(r'\baria-label="[^"]*"',lambda _: 'aria-label="'+val+'"',tag)
            return tag[:-1]+' aria-label="'+val+'">'
        doc=re.sub(tag_pat,replace_aria,doc)
    meta=metadata[code]
    doc=re.sub(r'<html\s+lang="[^"]+"',f'<html lang="{code}"',doc,count=1)
    doc=re.sub(r'<title>.*?</title>',lambda _: '<title>'+meta['title']+'</title>',doc,count=1,flags=re.S)
    doc=re.sub(r'<meta name="description" content="[^"]*">',lambda _: '<meta name="description" content="'+html.escape(meta['description'],quote=True)+'">',doc,count=1)
    doc=re.sub(r'<link rel="canonical" href="[^"]*">',lambda _: '<link rel="canonical" href="'+meta['url']+'">',doc,count=1)
    for property_,value in [('og:locale',meta['locale']),('og:title',meta['title']),('og:description',meta['description']),('og:url',meta['url']),('og:image',meta['image']),('og:image:alt',meta['image_alt'])]:
        doc=re.sub(r'(<meta property="'+re.escape(property_)+r'" content=")[^"]*(")',lambda m:m.group(1)+html.escape(value,quote=True)+m.group(2),doc,count=1)
    doc=re.sub(r'<link rel="alternate" hreflang="[^"]+" href="[^"]+">\s*','',doc)
    alternates='\n'.join('<link rel="alternate" hreflang="{}" href="{}">'.format(c,metadata[c]['url']) for c in ('fr','es'))
    alternates+='\n<link rel="alternate" hreflang="x-default" href="https://iut-cumana.fr/">'
    doc=doc.replace('</head>',alternates+'\n</head>',1)
    doc=re.sub(r'(<a\s+href=")[^"]*("\s+data-language="fr")',r'\1/\2',doc)
    doc=re.sub(r'(<a\s+href=")[^"]*("\s+data-language="es")',r'\1/es/\2',doc)
    def active(m):
        tag=m.group(0).replace(' aria-current="page"','')
        if 'data-language="'+code+'"' in tag:
            tag=tag.replace('>', ' aria-current="page">',1)
        return tag
    doc=re.sub(r'<a\s+[^>]*data-language="(?:fr|es)"[^>]*>',active,doc)
    return doc

for code,path in [('fr',BASE/'index.html'),('es',BASE/'es'/'index.html')]:
    path.parent.mkdir(parents=True,exist_ok=True)
    path.write_text(render(code),encoding='utf-8')
    print('Généré :',path.relative_to(BASE))
