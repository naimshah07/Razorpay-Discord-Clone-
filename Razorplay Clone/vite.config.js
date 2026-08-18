/** @type {import('vite').UserConfig} */
const { defineConfig } = require('vite')

module.exports = defineConfig({
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist'
  }
})
