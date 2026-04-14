// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/ui', '@vite-pwa/nuxt', '@nuxt/image'],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  // routeRules: {
  //   '/': { prerender: true }
  // },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'workbox-window',
      ]
    }
  },

  pwa: {
    /* PWA options */
    manifest: {
      name: 'Ironclad',
      short_name: 'Ironclad',
      description: 'Take control',
      orientation: 'natural',
      lang: 'en',
      display: 'standalone',
      background_color: '#272727',
      theme_color: '#272727',
      // icons: [
      //   {
      //     src: '/images/maskable_icon.png',
      //     sizes: '445x445',
      //     type: 'image/png',
      //     purpose: "any"
      //   },
      //   {
      //     src: '/images/maskable_icon.png',
      //     sizes: '445x445',
      //     type: 'image/png',
      //     purpose: "monochrome"
      //   },
      //   {
      //     src: '/images/maskable_icon.png',
      //     sizes: '445x445',
      //     type: 'image/png',
      //     purpose: "maskable"
      //   },
      //   {
      //     src: '/images/logo_transparent_512x512.png',
      //     sizes: '512x512',
      //     type: 'image/png',
      //   },
      //   {
      //     src: '/images/maskable_icon.png',
      //     sizes: '445x445',
      //     type: 'image/png',
      //   }
      // ],
      categories: [
        "fitness",
        "health",
        "lifestyle",
        "productivity",
        "books",
        "personalization"
      ],
      display_override: [
        "standalone",
        "window-controls-overlay"
      ],
      // related_applications: [
      //   {
      //     "platform": "play",
      //     "url": "https://play.google.com/store/apps/details?id=app.vercel.goals_io.twa.pwa&hl=en-US&ah=LK08Pcp_p9aSBNro6Va1uM424v4",
      //     "id": "app.vercel.goals_io.twa.pwa"
      //   },
      //   {
      //     "platform": "windows",
      //     "url": "https://www.ascendpod.com"
      //   }
      // ],
      prefer_related_applications: true,
    },
    workbox: {
      'navigateFallback': '/',
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },
    devOptions: {
      enabled: true,
      type: 'module'
    },
  },

  // ui: {
  //   colors: {
  //     primary: 'green',
  //     neutral: 'slate'
  //   }
  // }
})