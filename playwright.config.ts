import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./src/test",
  use: {
    // Keep defaults; configure locally if needed.
  },
});
