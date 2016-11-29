# NRF24 Documentation

NRF24 documentation website.


## Project structure

### Output HTML structure

 - `index.html`: Home page
 - `getting-started.html`: Getting started page
 - `hardware.html`: Hardware page
 - `library-examples.html`: Library examples page
 - `camke.html`: Build using cmake page
 - `404.html`: Error 404 page
 - `docs/`: NRF24 Documentation (Doxygen generated)
     + `index.html`: Documentation index page
     + `[...].html`: Auto-generated documentation pages
     
### Output assets structure

 - `assets/`
    + `fonts/`: Font files (*.ttf, *.woff, *.eot, *.svg)
    + `stylesheets/`
        - `bundle.css`: Vendor css bundle
        - `home.css`: Home page style
        - `page.css`: Page style
        - `docs.css`: Documentation style
        - `404.css`: Page not found style 


## Templates

### Inheritance
 
 - `_layout`
 - `index` extends `_layout`
 - `page` extends `_layout`
 - `404` extends `page`
 - `examples` extends `page`
 - `docs/index` extends `page`
 
### Partials

 - `index` ⇐ `partials/_footer`
 - `page` ⇐ `partials/_header` + `partials/_footer`
 - `examples` ⇐ `partials/_example`
 - `docs/index` ⇐ `docs/partials/*`


## Styles

### CSS-Template relationships

 - `_layout.pug`: [`bundle.css`]
 - `index.pug`: [`home.css`]
 - `_page.pug`: [`page.css`]
 - `404.pug`: [`404.css`]
 - `docs/*`: [`docs.css`]


## Build recipes

### HTML files
 
 - `index.pug` + `home.md` ⇒ `index.html`
 - `page.pug` + `getting-started.md` ⇒ `getting-started.html`
 - `page.pug` + `hardware.md` ⇒ `hardware.html`
 - `examples.pug` + `library-examples.md` + `examples/*` ⇒ `library-examples.html`
 - `page.pug` + `cmake.md` ⇒ `cmake.html`
 - `404.pug` ⇒ `404.html`
 - `docs/` ⇒ NRF24 Documentation
    + `docs/index.pug` + `doxygen.md` ⇒ `index.html`
    + `docs/partials/*` + `xml/` ⇒ Auto-generated documentation pages
    
### CSS files

 - `bundle.scss` + `_base.scss` + `vendor/_all.scss` + vendor css ⇒ `bundle.css`
 - `home.scss` + `_base.scss` + `_nav.scss ` + `_footer.scss` ⇒ `home.css`
 - `page.scss` + `_base.scss` + `_nav.scss ` + `_footer.scss` ⇒ `page.css`
 - `404.scss` + `_base.scss` ⇒ `404.css`
 - `docs.scss` + `_base.scss` + `partials/docs/*` ⇒ `docs.css`
