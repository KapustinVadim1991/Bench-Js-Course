/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    environment: "jsdom", // или 'node' в зависимости от ваших потребностей
    globals: true,
  },
});
