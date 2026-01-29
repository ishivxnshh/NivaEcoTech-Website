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
                'solar-park-development': 'solar-park-development.html',
                'rooftop-solar-epc': 'rooftop-solar-epc.html',
                'operations-maintenance': 'operations-maintenance.html',
                'fund-raising': 'fund-raising.html',
                'project-consulting': 'project-consulting.html',
                'portfolio-solar-parks': 'portfolio-solar-parks.html',
                'portfolio-rooftop': 'portfolio-rooftop.html',
            },
        },
    }
})
