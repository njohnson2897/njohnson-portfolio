import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { tmpdir } from "os";
import { join } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use a cache directory outside OneDrive to avoid permission issues
  cacheDir: join(tmpdir(), "vite-cache-njohnson-portfolio"),
  preview: {
    allowedHosts: ["njohnson-portfolio.onrender.com"],
  },
});
