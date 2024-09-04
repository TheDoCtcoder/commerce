import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

  

export default defineConfig({
  build: { chunkSizeWarningLimit: 4000, },
  base:'/commerce/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
