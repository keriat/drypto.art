// noinspection ES6PreferShortImport
import { Configuration, NuxtConfig } from "@nuxt/types";
import { NuxtOptionsEnv } from "@nuxt/types/config/env";
import { ToastAction, ToastIconPack, ToastObject, ToastOptions, ToastPosition } from "vue-toasted";

// noinspection ES6PreferShortImport
import { CURRENT_APP_NAME, ETHER_NETWORK_CAPITALIZED, ETHER_PRODUCTION } from "./src/plugins/build";

const srcDir = "./src/";

const env = process.env.APP_ENV ?? "dev";
const isProduction: boolean = ETHER_PRODUCTION && env === "prod";
const pageTitle: string = CURRENT_APP_NAME.toString() ?? "zkSync Wallet";
const pageImg = "/screenshot.jpg";

const pageTitleTemplate = `${ETHER_NETWORK_CAPITALIZED}`;
const pageDescription =
  "A crypto wallet & gateway to layer-2 zkSync Rollup. zkSync is a trustless, secure, user-centric protocol for scaling payments and smart contracts on Ethereum";
const pageKeywords = `zkSync, Matter Labs, rollup, ZK rollup, zero confirmation, ZKP, zero-knowledge proofs, Ethereum, crypto, blockchain, permissionless, L2, secure payments, scalable
crypto payments, zkWallet, cryptowallet`;

const config: NuxtConfig = {
  components: ["@/components/", { path: "@/blocks/", prefix: "block" }],
  telemetry: false,
  ssr: false,
  target: "static",
  srcDir: `${srcDir}`,
  vue: {
    config: {
      productionTip: isProduction,
      devtools: !isProduction,
    },
  },
  env: <NuxtOptionsEnv>{
    ...process.env,
  },

  /*
   ** Headers of the page
   */
  head: {
    title: pageTitle as string | undefined,
    titleTemplate: `%s | ${pageTitleTemplate}`,
    htmlAttrs: {
      lang: "en",
      amp: "true",
    },
    meta: [
      {
        property: "cache-control",
        httpEquiv: "cache-control",
        content: "no-cache , no-store, must-revalidate",
      },
      {
        httpEquiv: "pragma",
        content: "no-cache",
        property: "pragma",
      },
      {
        httpEquiv: "cache-control",
        property: "cache-control",
        content: "no-cache , no-store, must-revalidate",
      },
      {
        httpEquiv: "expires",
        content: "0",
        property: "expires",
      },
      {
        hid: "keywords",
        name: "keywords",
        content: pageKeywords,
      },
      {
        hid: "description",
        name: "description",
        content: pageDescription,
      },
      {
        hid: "author",
        name: "author",
        content: "https://",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: pageTitle,
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: pageDescription,
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: pageImg,
      },
      {
        hid: "twitter:site",
        name: "twitter:site",
        content: "@zksync",
      },
      {
        hid: "twitter:creator",
        name: "twitter:creator",
        content: "@the_matter_labs",
      },
      {
        hid: "twitter:image:alt",
        name: "twitter:image:alt",
        content: pageTitle,
      },
      {
        hid: "og:title",
        property: "og:title",
        content: pageTitle,
      },
      {
        hid: "og:description",
        property: "og:description",
        content: pageDescription,
      },
      {
        hid: "og:image",
        property: "og:image",
        content: pageImg,
      },
      {
        hid: "og:image:secure_url",
        property: "og:image:secure_url",
        content: pageImg,
      },
      {
        hid: "og:image:alt",
        property: "og:image:alt",
        content: pageTitle,
      },

      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "msapplication-TileImage",
        name: "msapplication-TileImage",
        content: "/favicon-dark.png",
      },
      { hid: "theme-color", name: "theme-color", content: "#4e529a" },
      {
        hid: "msapplication-TileColor",
        property: "msapplication-TileColor",
        content: "#4e529a",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon-dark.png" }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#8c8dfc",
    continuous: true,
  },
  /*
   ** Global CSS
   */
  css: ["@/assets/style/main.scss"],
//
//    <!--    <script src = "js/easing.js" > </script>-->
//    <!--    <script src = "js/owl.carousel.js" > </script>-->
//    <!--    <script src = "js/validation.js" > </script>-->
//    <!--    <script src = "js/enquire.min.js" > </script>-->
//    <!--    <script src = "js/jquery.plugin.js" > </script>-->
//    <!--    <script src = "js/jquery.countTo.js" > </script>-->
//    <!--    <script src = "js/jquery.countdown.js" > </script>-->
  js: [
    "https://code.jquery.com/jquery-3.6.0.min.js",
//    "//cdn.jsdelivr.net/gh/dkern/jquery.lazy@1.7.10/jquery.lazy.min.js",
//    "//cdn.jsdelivr.net/gh/dkern/jquery.lazy@1.7.10/jquery.lazy.plugins.min.js",
//    "~bootstrap/dist/js/bootstrap.bundle.min.js",
//    "~magnific-popup/dist/jquery.magnific-popup.min.js",
//    "~isotope-layout/dist/isotope.pkgd.min.js",
//    "@/assets/js/easing.js",
//    "~owl.carousel/dist/owl.carousel.min.js",
//    "@/assets/js/validation.js",
//    "@/assets/js/jquery.plugin.js",
//    "@/assets/js/jquery.countTo.js",
//    "@/assets/js/jquery.countdown.js",
//    "@/assets/js/enquire.min.js",
//    "@/assets/js/designesia.js"
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["@/plugins/icons", "@/plugins/main"],

  router: {
    middleware: ["magicauth"],
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
//    "nuxt-build-optimisations",
    "@nuxtjs/style-resources",
    "@nuxtjs/google-fonts",
    "nuxt-typed-vuex",
    ["@nuxtjs/dotenv", { path: __dirname }],
    [
      "@nuxt/typescript-build",
      {
        typescript: {
          typeCheck: {
            async: true,
            stylelint: {
              config: [".stylelintrc"],
              files: "src/**/*.scss",
            },
            eslint: {
              config: ["tsconfig-eslint.json", ".eslintrc.js"],
              files: "@/**/*.{ts,vue,js}",
            },
            files: "@/**/*.{ts,vue,js}",
          },
        },
      },
    ],
  ],

  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/dotenv", "@nuxt/http","@nuxtjs/axios", "@nuxtjs/toast", "@nuxtjs/google-gtag"],
  toast: <ToastOptions>{
    singleton: true,
    keepOnHover: true,
    position: "bottom-right" as ToastPosition,
    duration: 4000,
    className: "zkToastMain",
    iconPack: "fontawesome" as ToastIconPack,
    action: <ToastAction>{
      text: "Close",
      class: "zkToastActionClose",
      icon: "fa-times-circle",
      onClick: (_e: Event, toastObject: ToastObject): void => {
        toastObject.goAway(100);
      },
    },
  },
  inkline: {
    config: {
      autodetectVariant: true,
    },
  },
  styleResources: {
    scss: ["@/assets/style/vars/*.scss"],
  },
  sentry: {
    dsn: process.env.SENTRY_DSN,
    disableServerSide: true,
    config: {
      tracesSampleRate: 1.0,
      environment: env === "prod" ? "production" : env === "dev" ? "development" : env,
    },
  },
  "google-gtag": {
    id: process.env.GTAG_ID,
    config: {
      anonymize_ip: true, // anonymize IP
      send_page_view: true, // might be necessary to avoid duplicated page track on page reload
    },
    debug: env !== "prod", // enable to track in dev mode
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
  },
  /*
   ** Build configuration
   */
  build: {
    babel: {
      compact: true,
    },
    transpile: ["oh-vue-icons"], // [v.2.4.0]: oh-vue-icons package
    hardSource: isProduction,
    ssr: false,
    extend: (config: Configuration) => {
      config.node = {
        fs: "empty",
      };
    },
  },
  buildOptimisations: {
    profile: env !== "prod" ? "risky" : "experimental",
    features: {
      postcssNoPolyfills: isProduction,
      hardSourcePlugin: isProduction,
    },
    esbuildLoaderOptions: "esnext",
  },
  googleFonts: {
    prefetch: true,
    preconnect: true,
    preload: true,
    display: "swap",
    families: {
      "Fira+Sans": [400, 600],
      "Fira+Code": [400],
    },
  },
  generate: {
    dir: "public",
    devtools: env !== "prod",
  },
};
export default config;
