import solid from "solid-start/vite";
import { defineConfig } from "vite";
export default defineConfig({
  base: "/solid-start-static/",
  plugins: [
    {
      ...(await import("@mdx-js/rollup")).default({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
      }),
      enforce: "pre",
    },
    solid({
      ssr: false,
      extensions: [".mdx", ".md"],
      adapter: staticAdapter() 
    }),
  ],
});
