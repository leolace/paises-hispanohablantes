import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import ReactSvgPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ReactSvgPlugin()],
});