// Témoignages validés. Le site les trie automatiquement du plus récent au plus ancien.

window.TEMOIGNAGES = [
  {
    datePublication: "2026-10-20",
    titre: "Cumaná et Araya : une histoire entre mer, sel et rencontres",
    auteur: "Philippe Vogt-Schilb — repères historiques et souvenirs",
    apercu: "De la Primogénita aux salines d’Araya, des séismes aux flamants de Chacopata : quelques repères historiques et les images restées en mémoire depuis les années de coopération.",
    fichier: "temoignages/temoignage-cumana-araya.html"
  },
  {
    datePublication: "2026-10-12",
    titre: "Federico Rivero Palacio et la création des IUT du Venezuela",
    auteur: "Dúmar Ramirez — El Conocimiento es Vida",
    apercu: "Un regard sur le rôle de Federico Rivero Palacio et l’apport de la coopération française à la création des IUT vénézuéliens, présenté par l’ingénieur Dúmar Ramirez.",
    contenu: `
      <p>
        Dans cet article publié le <strong>16 novembre 2022</strong> sur
        <em>El Conocimiento es Vida</em>, l’ingénieur <strong>Dúmar Ramirez</strong>
        présente son intervention consacrée à Federico Rivero Palacio et
        à la création des Instituts Universitaires de Technologie du Venezuela.
      </p>
      <p>
        Invité à un forum de la Société franco-vénézuélienne d’ingénieurs
        et de scientifiques, dans le cadre du 161e anniversaire du Colegio
        de Ingenieros de Venezuela, il évoque l’apport de la coopération
        française dans les années 1970 et 1980 et le rôle de Federico Rivero
        Palacio, promoteur du projet du côté vénézuélien.
      </p>
      <p>
        Cette ressource éclaire le contexte historique dans lequel s’inscrit
        l’expérience des coopérants de l’IUT de Cumaná.
      </p>
      <p>
        <a href="https://elconesvida.net/2022/11/16/recordando-al-dr-federico-rivero-palacio-y-la-creacion-de-los-iut-de-venezuela/"
           target="_blank" rel="noopener noreferrer">
          Consulter l’article original — en espagnol
        </a>
      </p>
      <p class="testimony-signature">
        Article de Dúmar Ramirez — 16 novembre 2022. Présentation du lien ajoutée le 12 octobre 2026.
      </p>
    `
  },
     {
    datePublication: "2026-10-09",
    titre: "Venezuela, années 1970 : les promesses et les contradictions de l’abondance",
    auteur: "Éclairage historique — Ph. V‑S., avec l’aide de l’IA",
    apercu: "La manne pétrolière nourrit de grandes ambitions, mais révèle aussi les tensions entre importations et production locale, les inégalités et les défis du développement régional.",
    fichier: "temoignages/temoignage-contexte.html"
  },
    {
  datePublication: "2026-10-03",
  titre: "Qui étaient les VSNA ?",
  auteur: "Repères historiques (mis en forme par l'IA)",

  apercu: "Qui étaient les VSNA ? Quelques repères pour comprendre le statut des jeunes Français qui effectuèrent leur service national en coopération au Venezuela et enseignèrent notamment à l'IUT de Cumaná.",

  fichier: "temoignages/temoignage-vsna.html"
},
    {
  datePublication: "2026-10-02",
  titre: "Aux origines des IUT vénézuéliens et de la coopération française",
  auteur: "Rafael Pico, Noel Jaen y Javier Gómez, Prof. Rodolfo Bazó.",

  apercu: "Une histoire de la création des IUT au Venezuela qui retrace le choix du modèle français, le rôle de l'IUT de Cachan et l'arrivée des premiers coopérants français en 1970.",

  fichier: "temoignages/temoignage-origines-iut.html"
},
    {
    datePublication: "2026-10-02",
    titre: "Les Instituts Universitaires de Technologie au Venezuela",
    auteur: "María Egilda Castellano de Sjöstrand",

    apercu: "Un document de référence sur l'origine et le développement des Instituts Universitaires de Technologie au Venezuela, créés dans les années 1970 en s'inspirant notamment du modèle français.",

    contenu: `
      <p>
        Cette communication de María Egilda Castellano de Sjöstrand,
        alors vice-ministre des Politiques académiques du ministère
        vénézuélien de l'Enseignement supérieur, a été présentée à
        La Havane en novembre 2002.
      </p>

      <p>
        Elle retrace l'origine et le développement des Instituts
        Universitaires de Technologie au Venezuela et rappelle notamment
        l'influence du modèle français lors de leur création dans les
        années 1970.
      </p>

      <p>
        <a href="https://pr1enahp.wordpress.com/wp-content/uploads/2011/11/iut-venezuela-maria-e-castellano.pdf"
           target="_blank"
           rel="noopener noreferrer">
          Consulter le document original (PDF, en espagnol)
        </a>
      </p>

      <p class="testimony-signature">
        María Egilda Castellano de Sjöstrand — 2002
      </p>
    `
  },
  {
    datePublication: "2026-09-30",
    titre: "Mes années à Cumaná",
    auteur: "Philippe Vogt-Schilb",
    apercu: "C'était mon premier voyage en avion. Entre Noël et le Nouvel An, j'ai quitté la France, un roman de Raphaëlle Billetdoux à la main, pour poser mes valises à Cumaná, de l'autre côté de l'Atlantique…",
    fichier: "temoignages/temoignage-pvs.html"
  }
];


// Versions espagnoles des trois récits de Philippe et du contexte historique.
// La langue est celle de la page générée ; aucun changement du générateur requis.
(() => {
  const originaux = window.TEMOIGNAGES.map(item => ({...item}));
  const versionsEspagnoles = {
  "temoignages/temoignage-pvs.html": {
    "titre": "Mis años en Cumaná",
    "apercu": "Era mi primer viaje en avión. Entre Navidad y Año Nuevo, salí de Francia, con una novela de Raphaëlle Billetdoux en la mano, para llegar a Cumaná, al otro lado del Atlántico…",
    "fichier": "/temoignages/temoignage-pvs-es.html"
  },
  "temoignages/temoignage-contexte.html": {
    "titre": "Venezuela, años setenta: las promesas y las contradicciones de la abundancia",
    "auteur": "Contexto histórico — Ph. V‑S., con ayuda de la IA",
    "apercu": "La bonanza petrolera alimenta grandes ambiciones, pero también revela las tensiones entre las importaciones y la producción nacional, las desigualdades y los retos del desarrollo regional.",
    "fichier": "/temoignages/temoignage-contexte-es.html"
  },
  "temoignages/temoignage-cumana-araya.html": {
    "titre": "Cumaná y Araya: una historia entre el mar, la sal y los encuentros",
    "auteur": "Philippe Vogt-Schilb — historia y recuerdos",
    "apercu": "De la Primogénita a las salinas de Araya, de los terremotos a los flamencos de Chacopata: referencias históricas e imágenes que siguen en la memoria desde los años de cooperación.",
    "fichier": "/temoignages/temoignage-cumana-araya-es.html"
  },
  "temoignages/temoignage-vsna.html": {
    "titre": "¿Quiénes eran los VSNA?",
    "auteur": "Referencias históricas (edición con ayuda de la IA)",
    "apercu": "¿Quiénes eran los VSNA? Algunas claves para entender la condición de los jóvenes franceses que cumplían su servicio nacional en cooperación en Venezuela y enseñaban, entre otros lugares, en el IUT de Cumaná.",
    "fichier": "/temoignages/temoignage-vsna-es.html"
  },
  "temoignages/temoignage-origines-iut.html": {
    "titre": "Los orígenes de los IUT venezolanos y de la cooperación francesa",
    "apercu": "La historia de la creación de los IUT en Venezuela: la elección del modelo francés, el papel del IUT de Cachan y la llegada de los primeros cooperantes franceses en 1970.",
    "fichier": "/temoignages/temoignage-origines-iut-es.html"
  }
};
    let langueAppliquee = '';

  function actualiserTemoignages() {
    const langue = document.documentElement.lang
      .toLowerCase().split('-')[0];

    if (langue === langueAppliquee) return;
    langueAppliquee = langue;

    window.TEMOIGNAGES.forEach((item, index) => {
      const original = originaux[index];
      const version = versionsEspagnoles[original.fichier || original.titre];

      if (version) {
        Object.assign(item, original, langue === 'es' ? version : {});
      }
    });

    const tries = [...window.TEMOIGNAGES].sort((a, b) =>
      String(b.datePublication || '')
        .localeCompare(String(a.datePublication || ''))
    );

    document.querySelectorAll('#testimonyList .testimony-card')
      .forEach((carte, index) => {
        const item = tries[index];
        if (!item) return;

        const original = originaux[window.TEMOIGNAGES.indexOf(item)];
        if (!versionsEspagnoles[original.fichier || original.titre]) return;

        const titre = carte.querySelector('h3');
        const apercu = carte.querySelector('.testimony-preview');
        const meta = carte.querySelector('.testimony-meta');
        const frame = carte.querySelector('iframe');
        const full = carte.querySelector('.testimony-full');
        if (full && !item.fichier && typeof sanitizeTestimony === 'function') {
          full.replaceChildren(sanitizeTestimony(item.contenu || ''));
        }

        if (titre) titre.textContent = item.titre;
        if (apercu) apercu.textContent = item.apercu;

        if (meta) {
          const date = new Intl.DateTimeFormat(
            langue === 'es' ? 'es-VE' : 'fr-FR',
            {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
              timeZone: 'UTC'
            }
          ).format(new Date(item.datePublication + 'T00:00:00Z'));

          meta.textContent = item.auteur
            + (langue === 'es' ? ' · Publicado el ' : ' · Publié le ')
            + date;
        }

        if (frame) {
          frame.title = item.titre;
          if (frame.getAttribute('src') !== item.fichier) {
            frame.setAttribute('src', item.fichier);
          }
        }
      });
  }

  actualiserTemoignages();

  new MutationObserver(actualiserTemoignages).observe(
    document.documentElement,
    {attributes: true, attributeFilter: ['lang']}
  );
})();
