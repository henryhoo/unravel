import path from "path";
import axios from "axios";
import { createGenerateClassName } from "@material-ui/core/styles";

const generateClassName = createGenerateClassName();

export default {
  getSiteData: () => ({
    siteTitle: "React Static",
    routes: [
      {
        itemName: "Before Purchase",
        urlPart: "before",
        items: [
          { itemName: "How to check", urlPart: "how_to_check" },
          { itemName: "How to read title", urlPart: "how_to_read_title" },
        ],
      },
      {
        itemName: "After Purchase",
        urlPart: "after",
        items: [{ itemName: "ddd", urlPart: "ddd" }],
      },
      {
        itemName: "Where to Dispose",
        urlPart: "dispose",
        items: [{ itemName: "How to check", urlPart: "how_to_check" }],
      },
      {
        itemName: "Fabric Types",
        urlPart: "types",
        items: [
          { itemName: "How to read title", urlPart: "how_to_read_title" },
        ],
      },
    ],
  }),

  getRoutes: async () => {
    return [
      {
        path: "/404",
        template: "./src/pages/404.js",
      },
    ];
  },
  plugins: [
    [
      "react-static-plugin-md-pages",
      {
        location: "./contents", // path to markdown files' directory
        pathPrefix: "", // prefix for added react-static routes (if any)
        template: "./src/components/markdownTemplate.js", // path to React template component
        remarkPlugins: [], // add additional remark plugins here
      },
    ],
    [
      "react-static-plugin-jss",
      {
        providerProps: {
          generateClassName,
        },
      },
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
    ["react-static-plugin-typescript"],
  ],
};
