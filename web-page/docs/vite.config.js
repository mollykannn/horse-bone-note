import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  build: {
    sourcemap: process.env.SOURCE_MAP === 'true'
  },
  base: '/horse-bone-note',
  plugins: [
    VitePWA({
      filename: 'sw.js',
      base: '/horse-bone-note/',
      outDir: '.vitepress/dist',
      registerType: 'autoUpdate',
      strategies: 'injectManifest',
      includeAssets: ['favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
      manifest: {
        name: '馬骨筆記本',
        short_name: '馬骨筆記本',
        description: '馬骨記錄用筆記本',
        theme_color: '#0079d2',
        start_url: './index.html',
        lang: 'zh-Hant-HK',
        dir: 'ltr',
        orientation: 'portrait',
        icons: [
          {
            src: 'images/icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'images/icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'images/icons/android-chrome-maskable-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          },
          {
            src: 'images/icons/android-chrome-maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    }),
  ]
})
