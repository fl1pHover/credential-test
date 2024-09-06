// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: "2024-09-06",
    css: ["~/assets/css/tailwind.css", "~/assets/css/main.css"],
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    devtools: { enabled: true },
    modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
});
