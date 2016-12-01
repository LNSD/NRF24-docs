"use strict";

exports.page = {
        index: {
            name: 'Home',
            url: '/'
        },
        usage: {
            name: 'Library installation',
            url: '/usage.html'
        },
        architecture: {
            name: 'Driver architecture',
            url: '/architecture.html'
        },
        examples: {
            name: 'Library examples',
            url: '/examples.html'
        },
        hardware: {
            name: 'Hardware',
            url: '/hardware.html'
        },
        cmake: {
            name: 'Build using CMake',
            url: '/cmake.html'
        },
        contribute: {
            name: 'How to Contribute',
            url: '/contribute.html'
        },
        docs: {
            name: 'Documentation',
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
            title: 'Get started',
            links: [
                exports.page.index,
                exports.page.usage,
                exports.page.architecture,
                exports.page.examples,
                exports.page.docs
            ]
        },
        {
            title: 'Advanced',
            links: [
                exports.page.hardware,
                {
                    name: 'NRF24 Modules',
                    url: `${exports.page.hardware.url}#modules`
                },
                exports.page.cmake,
                {
                    name: 'Arduino CMake',
                    url: `${exports.page.cmake.url}#arduino`
                },
                {
                    name: 'CMake and CLion',
                    url: `${exports.page.cmake.url}#clion`
                }
            ]
        },
        {
            title: 'Contribute',
            links: [
                exports.page.contribute,
                exports.donate,
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