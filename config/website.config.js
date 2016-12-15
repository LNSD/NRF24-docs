"use strict";

exports.page = {
        index: {
            url: '/'
        },
        gstarted: {
            url: '/get-started'
        },
        stack: {
            url: '/library-stack'
        },
        examples: {
            url: '/examples'
        },
        hardware: {
            url: '/hardware'
        },
        advanced: {
            url: '/advanced'
        },
        contribute: {
            url: '/contribute'
        },
        docs: {
            url: '/docs'
        }
    };

exports.social = {
        website: {
            name: 'Website',
            url: 'http://LNSD.es/'
        },
        email: {
            name: 'E-mail',
            url: 'mailto:contact@lnsd.es'
        },
        github:  {
            name: 'Github',
            url: 'https://github.com/LNSD'
        },
        twitter: {
            name: 'Twitter',
            url: 'https://twitter.com/LNSD002'
        },
        facebook: {
            name: 'Facebook',
            url: 'https://www.facebook.com/LNSD002'
        },
        instagram: {
            name: 'Instagram',
            url: 'https://instagram.com/lnsd.es'
        },
        linkedin: {
            name: 'LinkedIn',
            url: 'https://www.linkedin.com/in/lorenzodelgado'
        }
};

exports.donate = {
    name: 'Buy Me a Beer!',
    url: '#donate'
};


exports.footer = {
    nav: [
        {
            title: 'Library',
            links: [
                {
                    name: 'Home',
                    url: exports.page.index.url
                },
                {
                    name: 'Get started',
                    url: exports.page.gstarted.url
                },
                {
                    name: 'Examples',
                    url: exports.page.examples.url
                },
                {
                    name: 'NRF24 stack',
                    url: exports.page.stack.url
                },
                {
                    name: 'API documentation',
                    url: exports.page.docs.url
                }
            ]
        },
        {
            title: 'Advanced',
            links: [
                {
                    name: 'Hardware',
                    url: exports.page.hardware.url
                },
                {
                    name: 'Compatible Modules',
                    url: exports.page.hardware.url + '#nrf24l01-modules'
                },
                {
                    name: 'Development kits',
                    url: exports.page.hardware.url + '#nrf24-development-kits'
                },
                {
                    name: 'Arduino CMake',
                    url: exports.page.advanced.url
                },
                {
                    name: 'Arduino CMake development',
                    url: exports.page.advanced.url + '#arduino-cmake-development'
                }
            ]
        },
        {
            title: 'Contribute',
            links: [
                {
                    name: 'How to contribute',
                    url: exports.page.contribute.url
                },
                {
                    name: 'Buy me a Beer!',
                    url: exports.donate.url
                },
                {
                    name: 'Submit an Issue',
                    url: 'https://github.com/LNSD/NRF24/issues'
                },
                {
                    name: 'Submit an Enhancement',
                    url: 'https://github.com/LNSD/NRF24/issues'
                },
                {
                    name: 'Project License',
                    url: 'https://www.mozilla.org/en-US/MPL/2.0/'
                }
            ]
        }
    ]
};