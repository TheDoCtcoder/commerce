import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

  

export default defineConfig({
  build: { chunkSizeWarningLimit: 3200, },
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
