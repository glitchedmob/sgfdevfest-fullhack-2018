const jsonImporter = require('node-sass-json-importer');
const cssImporter = require('node-sass-css-importer');

const pkg = require('./package');

module.exports = {
    mode: 'spa',

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet',href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,700' },
            { rel: 'stylesheet',href: 'https://use.fontawesome.com/releases/v5.5.0/css/all.css' },
        ]
    },

    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#fff' },

    /*
    ** Global CSS
    */
    css: [
        '~/assets/scss/main.scss',
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        '~/plugins/vue-parallax',
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
        'portal-vue/nuxt',
        ['nuxt-sass-resources-loader', '~/assets/scss/utils/_all.scss'],
    ],
    /*
    ** Axios module configuration
    */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /*
    ** Build configuration
    */
    build: {
        loaders: {
            scss: {
                importer: [
                    jsonImporter(),
                ],
            },
        },
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {

        }
    }
};
