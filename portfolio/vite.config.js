import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure the output is in the 'dist' directory
    rollupOptions: {
      input: "./src/main.jsx", // Your entry point file
      output: {
        dir: "dist", // Output the files in the 'dist' directory
        entryFileNames: "worker.js", // This will generate a file called 'worker.js'
        format: "esm", // Cloudflare Workers require ES Modules
      },
    },
  },
});
