import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import express from 'express'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'serve-static-assets',
      configureServer(server) {
        server.middlewares.use('/assets', express.static(path.resolve(__dirname, 'assets')))
        server.middlewares.use('/videos', express.static(path.resolve(__dirname, 'videos')))
      }
    }
  ],
  resolve: {
    preserveSymlinks: true,
  },
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true
      }
    }
  }
})

