module.exports = {
  title: "馬骨筆記本",
  description: "馬骨記錄用筆記本",
  base: "/horse-bone-note/",
  head: [
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,viewport-fit=cover",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "https://mollykannn.github.io/horse-bone-note/images/icons/favicon.ico",
        type: "image/ico",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "https://mollykannn.github.io/horse-bone-note/images/icons/apple-touch-icon.png",
        size: "180x180",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "https://mollykannn.github.io/horse-bone-note/images/icons/android-chrome-192x192.png",
        type: "image/png",
        size: "192x192",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "https://mollykannn.github.io/horse-bone-note/images/icons/android-chrome-32x32.png",
        type: "image/png",
        size: "32x32",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "https://mollykannn.github.io/horse-bone-note/images/icons/android-chrome-16x16.png",
        type: "image/png",
        size: "16x16",
      },
    ],
    ["meta", { property: "og:title", content: "馬骨筆記本" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:description", content: "馬骨記錄用筆記本" }],
    [
      "meta",
      {
        property: "og:url",
        content: "https://mollykannn.github.io/horse-bone-note/",
      },
    ],
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:title", content: "馬骨筆記本" }],
    ["meta", { name: "theme-color", content: "#000" }],
    ["link", {
      rel: "manifest",
      href: "https://mollykannn.github.io/horse-bone-note/manifest.webmanifest",
    },],
    ["script", { src: "https://mollykannn.github.io/horse-bone-note/registerSW.js" }],
  ],
  dest: "dist",
  themeConfig: {
    sidebarDepth: 0,
    sidebar: [
      { text: "Home", link: "/" },
      { text: "GREEN-PAGE-BBS-crawler", link: "/GREEN-PAGE-BBS-crawler/index" },
    ],
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Github",
        link: "https://github.com/mollykannn/horse-bone-note",
      },
    ],
  },
  locales: {
    "/": {
      lang: "zh-Hant",
    },
  },
};
