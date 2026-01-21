import { defineConfig } from 'vite'

export default defineConfig({
    root: '.',
    base: './', // Use relative paths for assets so dist/ works in subfolders
    build: {
        outDir: 'dist',
        rollupOptions: {
            input: {
                main: 'index.html',
                contact: 'contact.html',
            },
        },
    }
})
