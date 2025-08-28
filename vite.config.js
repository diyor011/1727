
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
})
