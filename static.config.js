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
        items: [
          { itemName: "ddd", urlPart: "ddd" },
        ],
      },
      {
        itemName: "Where to Dispose",
        urlPart: "dispose",
        items: [
          { itemName: "How to check", urlPart: "how_to_check" },
        ],
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
    const { data: posts } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    return [
      {
        path: "/dispose",
        getData: () => ({
          posts,
        }),
        children: posts.map((post) => ({
          path: `/dispose/${post.id}`,
          template: "src/containers/Post",
          getData: () => ({
            post,
          }),
        })),
      },
    ];
  },
  plugins: [
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages"),
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
