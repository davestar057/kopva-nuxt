// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: {enabled: true},
    modules: ['@nuxt/fonts', '@nuxt/image', '@nuxtjs/tailwindcss', '@nuxt/icon'],
    fonts: {
        provider: 'google',
        // Optional defaults applied to all families (you can omit if you want)
        // defaults: { weights: [400, 700], styles: ['normal', 'italic'] },
        families: [
            {
                name: 'Figtree',              // default site font
                weights: [400, 500, 600, 700] // <- plural
            },
            {
                name: 'Inter',                // titles/headings
                weights: [400, 500, 700, 900] // include 900
            }
        ]
    },
    // css: ['@/assets/tailwind.css'],
    tailwindcss: {
        exposeConfig: true,
        viewer: true,

    },

})