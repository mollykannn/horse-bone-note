import { getSidebar } from "./theme/getSidebar";
import { withPwa } from "@vite-pwa/vitepress";

const ignoreSidebar = ["node_modules", "README.md", "index.md", "其他/comment"];
const config = async () => {
  return withPwa({
    title: "馬骨筆記本",
    description: "馬骨記錄用筆記本",
    base: "/horse-bone-note",
    themeConfig: {
      nav: [{ text: "Home", link: "/" }],
      sidebar: await getSidebar(ignoreSidebar),
      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/mollykannn/horse-bone-note",
        },
      ],
    },
    pwa: {
      filename: "sw.js",
      base: "/horse-bone-note/",
      outDir: ".vitepress/dist",
      registerType: "autoUpdate",
      strategies: "injectManifest",
      includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
      manifest: {
        name: "馬骨筆記本",
        short_name: "馬骨筆記本",
        description: "馬骨記錄用筆記本",
        theme_color: "#0079d2",
        start_url: "./index.html",
        lang: "zh-Hant-HK",
        dir: "ltr",
        orientation: "portrait",
        icons: [
          {
            src: "icons/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "icons/android-chrome-maskable-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "icons/android-chrome-maskable-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    },
  });
};

export default config();
