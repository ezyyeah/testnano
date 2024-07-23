import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import inoxToolswhen from "@inox-tools/astro-when";
import global from "astro-global";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), inoxToolswhen(), global()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});