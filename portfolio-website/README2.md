# Persoonlijke Portfolio — Ibrahim (Ibo)

Een eenvoudige, statische portfolio-website gemaakt met **HTML**, **CSS** en **JavaScript**. Geen frameworks, geen build-tools: gewoon bestanden die je direct in je browser kunt openen.

## Inhoud

| Pagina | Bestand | Beschrijving |
| --- | --- | --- |
| Home | `index.html` | Startpagina met over mij, mijn hobby en mijn doel |
| Mijn eerste website | `eenvoudig.html` | Korte pagina met naam en motivatie |
| Mijn hobby's | `hobbies.html` | Hobby's als kaartjes + waarom ik voor Software Developer koos |
| Over mij | `over-mij.html` | Hobby's, waarom Software Development, Valorant en toekomstplannen |

## Projectstructuur

```text
itbasic/
├── index.html          # Startpagina
├── eenvoudig.html      # Eenvoudige voorbeeldpagina
├── hobbies.html        # Hobby's en motivatie
├── over-mij.html       # Uitgebreide "over mij"-pagina
├── style.css           # Opmaak voor index.html
├── script.js           # JavaScript (nog niet gekoppeld aan index.html)
└── Opdracht 2/         # Losse schoolopdracht
    ├── index.html
    └── style.css
```

## Hoe open je de website?

1. Open de map `itbasic`.
2. Dubbelklik op `index.html`.

Dat is alles. Er is geen installatie of server nodig.

Wil je toch een lokale server gebruiken (bijvoorbeeld om het straks online te testen)? Dan kan dat met Python:

```bash
python -m http.server 8000
```

En ga daarna naar [http://localhost:8000](http://localhost:8000).

## Waar is het mee gemaakt?

- **HTML** — structuur en inhoud van de pagina's
- **CSS** — kleuren, layout en opmaak (`style.css` voor `index.html`; de andere pagina's hebben eigen stijlen in het bestand)
- **JavaScript** — `script.js` staat klaar voor interactie, maar is nog niet gekoppeld aan `index.html`

## De pagina aanpassen

- **Tekst**: open het HTML-bestand en wijzig de tussen `<p>`, `<h1>` en `<h2>` tags.
- **Kleuren**: wijzig de waarden in `style.css`, bijvoorbeeld `background-color: #7c5cbf;`.
- **Blokgrootte**: pas `width` en `height` aan in de classes `.nav`, `.content`, `.extra` en `.footer`.

## Volgende stappen

- [ ] `script.js` koppelen aan `index.html` met `<script src="script.js"></script>`
- [ ] Losse stijlen in de HTML-pagina's verplaatsen naar één `style.css`
- [ ] Eén navigatiemenu over alle pagina's
- [ ] Responsive maken met media queries
