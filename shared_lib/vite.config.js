import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name: "shared_lib",
      filename: "shared_lib.js",
      exposes: {
        "./constants": "./src/constants.js",
      },
      remotes: {
        host_app: {
          type: "module",
          name: "host_app",
          entry: "http://localhost:5000/hostApp.js",
        },
      },
      shared: {
        react: {
          singleton: false,
        },
        "react-dom": {
          singleton: false,
        },
      },
    }),
    react(),
  ],
  server: {
    port: 6001,
    origin: "http://localhost:6001",
  },
  build: {
    target: "chrome89",
  },
});
