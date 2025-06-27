import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./App": "./src/App.jsx",
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
    port: 5001,
    origin: "http://localhost:5001",
  },
  build: {
    target: "chrome89",
  },
});
