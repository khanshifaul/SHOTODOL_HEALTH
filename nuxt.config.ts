// https://v3.nuxtjs.org/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        rootTag: "div",
        baseURL: "/SHOTODOL_HEALTH",
        buildAssetsDir: "/Assets/",
    },
    experimental: {
        payloadExtraction: false,
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxt/devtools'
    ],
    tailwindcss: {
        cssPath: '@/assets/css/tailwind.css',
        injectPosition: 'first',
        viewer: false,
    },
    colorMode: {
        preference: 'dark',
        classSuffix: '',
    },
    nitro: {
        preset: "node-server",
    },
});
