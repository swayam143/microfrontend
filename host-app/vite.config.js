import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name: "host_app",
      filename: "hostApp.js",
      exposes: {
        "./useCounter": "./src/useCounter.js",
      },
      remotes: {
        remote_app: {
          type: "module",
          name: "remote_app",
          entry: "http://localhost:5001/remoteEntry.js",
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
    port: 5000,
    origin: "http://localhost:5000",
  },
  build: {
    target: "chrome89",
  },
});
