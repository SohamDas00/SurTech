import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ No Tailwind import here
export default defineConfig({
  plugins: [react()],
})
