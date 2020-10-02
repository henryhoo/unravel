import path from 'path'
import axios from 'axios'
import { createGenerateClassName } from '@material-ui/core/styles'

const generateClassName = createGenerateClassName()

export default {
  getSiteData: () => ({
    siteTitle: 'React Static',
    routeMap: {
      before: ["how to check", "how to read title"],
      after: ["how to wash", "how to dry"],
      dispose: ["where to dispose"],
      types: ["cotton", "poly"],
    },
  }),

  getRoutes: async () => {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )

    return [
      {
        path: '/dispose',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/dispose/${post.id}`,
          template: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      },
    ]
  },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    [
      'react-static-plugin-jss',
      {
        providerProps: {
          generateClassName,
        },
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
    ['react-static-plugin-typescript'],
  ],
}
