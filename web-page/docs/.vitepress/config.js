module.exports = {
  title: "Note",
  description: "Note",
  base: "/web-crawler-hirasawa/",
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
        href: "https://mollykannn.github.io/web-crawler-hirasawa/images/icons/favicon.ico",
        type: "image/ico",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "https://mollykannn.github.io/web-crawler-hirasawa/images/icons/apple-touch-icon.png",
        size: "180x180",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "https://mollykannn.github.io/web-crawler-hirasawa/images/icons/android-chrome-192x192.png",
        type: "image/png",
        size: "192x192",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "https://mollykannn.github.io/web-crawler-hirasawa/images/icons/android-chrome-32x32.png",
        type: "image/png",
        size: "32x32",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: "https://mollykannn.github.io/web-crawler-hirasawa/images/icons/android-chrome-16x16.png",
        type: "image/png",
        size: "16x16",
      },
    ],
    ["meta", { property: "og:title", content: "Note" }],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:description", content: "Note" }],
    [
      "meta",
      {
        property: "og:url",
        content: "https://mollykannn.github.io/web-crawler-hirasawa/",
      },
    ],
    ["meta", { property: "twitter:card", content: "summary_large_image" }],
    ["meta", { property: "twitter:title", content: "Note" }],
    ["meta", { name: "theme-color", content: "#000" }],
    ["link", {
      rel: "manifest",
      href: "https://mollykannn.github.io/web-crawler-hirasawa/manifest.webmanifest",
    },],
    ["script", { src: "https://mollykannn.github.io/web-crawler-hirasawa/registerSW.js" }],
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
        link: "https://github.com/mollykannn/web-crawler-hirasawa",
      },
    ],
  },
  locales: {
    "/": {
      lang: "zh-Hant",
    },
  },
};
