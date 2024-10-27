import { defineManifest } from "@crxjs/vite-plugin";
import { version } from "./package.json";

const manifest = defineManifest(async (_env) => ({
  manifest_version: 3,
  name: "Browser Extension",
  description: "Browser Extension Description",
  version,
  // background: {
  //   service_worker: "src/app/service-worker/index.ts",
  // },
  // content_scripts: [
  //   {
  //     matches: ["http://*/*", "https://*/*", "file:///*"],
  //     js: ["src/app/content/index.tsx"],
  //   },
  // ],
  // host_permissions: ["<all_urls>"],
  // options_ui: {
  //   page: "src/app/options/options.html",
  //   open_in_tab: true,
  // },
  // web_accessible_resources: [
  //   {
  //     resources: [
  //       // this file is web accessible; it supports HMR b/c it's declared in `rollupOptions.input`
  //       "src/app/welcome/welcome.html",
  //     ],
  //     matches: ["<all_urls>"],
  //   },
  // ],
  // action: {
  //   // default_popup: "src/app/popup/popup.html",
  //   default_icon: {
  //     "16": "images/16.png",
  //     "32": "images/32.png",
  //     "48": "images/48.png",
  //     "128": "images/128.png",
  //   },
  // },
  icons: {
    "16": "images/16.png",
    "32": "images/32.png",
    "48": "images/48.png",
    "128": "images/128.png",
  },
  permissions: [
    // "storage",
    // "tabs",
  ],
}));

export default manifest;
