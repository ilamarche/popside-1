// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  nitro: {
    preset: 'service-worker'
  },
  modules: ['nuxt-gtag'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/app.scss" as *;'
        }
      }
    }
  },
  app: {
    head: {
      title: 'Popside — Immersions numériques',    
      pageTransition: { name: 'page', mode: 'rotate' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Space+Mono&display=swap'},
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: "anonymous"},
        { rel: 'preconnect', href: 'https://fonts.googleapis.com', crossorigin: "anonymous"},
      ],
    }
  },
  gtag: {
    id: 'G-B6NYVQHXDN'
  }
})
