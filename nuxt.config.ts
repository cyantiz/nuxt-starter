// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from 'path'

export default defineNuxtConfig({
    ssr: true,
    css: ['@/assets/css/main.less'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    alias: {
        "@@": resolve(__dirname, "pages"),
        "~~": resolve(__dirname, "components"),
    }
})
