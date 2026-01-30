// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  nitro: {
    preset: 'static'
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
        'data-theme': 'apptime'
      },
      title: 'Apptime Starter | Starter Project',
      meta: [
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Your modern foundation for high-performance web applications.' },
        { name: 'keywords', content: 'Apptime, Nuxt.js, TypeScript, Tailwind CSS, Starter Project' },
        { property: 'og:title', content: 'Apptime Starter | Starter Project' },
        { property: 'og:description', content: 'Your modern foundation for high-performance web applications.' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Apptime Starter | Starter Project' },
        { name: 'twitter:description', content: 'Your modern foundation for high-performance web applications.' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;600;900&display=swap' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' },
      ],
      script: [
        {
          src: 'https://cdn.apptime.app/apptime.js',
        },
        // { src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXX', async: true },
        // {
        //   innerHTML: `
        //     window.dataLayer = window.dataLayer || [];
        //     function gtag() { dataLayer.push(arguments); }
        //     gtag('js', new Date());
        //     gtag('config', 'G-XXXXXX');
        //   `,
        //   type: 'text/javascript'
        // }
      ]
    }
  }
})
