import { defineConfig } from "vite";
import preact from "@preact/preset-vite";

export default defineConfig({
  plugins: [preact()],
  // base: "/wedding-site/",
});

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     // preact({
//     //   prerender: {
//     //     enabled: true,
//     //     renderTarget: "#app",
//     //     additionalPrerenderRoutes: ["/404"],
//     //     previewMiddlewareEnabled: true,
//     //     previewMiddlewareFallback: "/404",
//     //   },
//     // }),
//     preact(),
//   ],
//   base: "/wedding-site/",
//   // resolve: {
//   //   alias: {
//   //     react: "preact/compat",
//   //     "react-dom": "preact/compat",
//   //   },
//   // },
// });
