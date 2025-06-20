import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
	resolve: {
		alias: {
			'@': '/src',
			'@assets': '/src/assets',
			'@components': '/src/components',
			'@pages': '/src/pages',
			'@router': '/src/router',
			'@store': '/src/store',
			'@styles': '/src/styles',
			'@utils': '/src/utils',
			'@types': '/src/types',
		}
	}
})
