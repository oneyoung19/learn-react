import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
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
			'@hooks': '/src/hooks',
		}
	}
})
