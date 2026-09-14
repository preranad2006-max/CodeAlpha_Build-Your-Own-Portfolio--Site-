import { defineConfig } from "vite";

export default defineConfig({
  base: "/CodeAlpha_Build-Your-Own-Portfolio--Site-/",
  server: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: true,
  },
});