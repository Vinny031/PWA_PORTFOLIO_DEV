import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.webp', 'assets/**/*'],
      manifest: {
        name: 'Vincent Fuseau | Portfolio',
        short_name: 'VF Portfolio',
        description: 'Portfolio de Vincent Fuseau, développeur web et photographe passionné',
        theme_color: '#111111',
        background_color: '#e8e8e8',
        display: 'standalone',
        icons: [
          {
            src: '/assets/icon/favicon.webp',
            sizes: '192x192',
            type: 'image/webp'
          },
          {
            src: '/assets/icon/favicon.webp',
            sizes: '512x512',
            type: 'image/webp'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,webp,png,svg,jpg,jpeg}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 365 days
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ]
})
