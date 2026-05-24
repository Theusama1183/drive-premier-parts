import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [
      {
        name: "tanstack-injected-head-scripts",
        resolveId(id) {
          if (id === "tanstack-start-injected-head-scripts:v") {
            return "\0tanstack-start-injected-head-scripts:v";
          }
        },
        load(id) {
          if (id === "\0tanstack-start-injected-head-scripts:v") {
            return 'export const injectedHeadScripts = undefined';
          }
        },
      },
    ],
  },
});
