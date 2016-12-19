# NRF24 Documentation

NRF24 documentation website.


## Gulp tasks params

> **Note:** `util.buildSrc({ in [, exclude] }) = { src }`

### `'build'`

- `'build-content'`: { in [, exclude], dest, template(func) }

- `'build-css'`
    + `'build-css-bundle'`: { in [, exclude], dest, css, vendor }
    + `'build-css'`: { in [, exclude], dest, vendor }

- `'build-js'`
    + `'build-js-bundle'`: { in [, exclude], dest }

- `'build-temp'`
    + `'build-temp-doxygen'`: { in [, exclude], dest, basename }

### `'copy'`

- `'build-assets'`: { in [, exclude], dest }

- `'build-fonts'`: { in [, exclude], dest }

### `'clean'`

- `'build-assets'`: { dir }

- `'build-fonts'`: { dir }
