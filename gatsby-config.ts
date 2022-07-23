import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `ADHD at 33`,
    siteUrl: `https://www.yourdomain.tld`,
    menuLinks: [
      {
        title: 'Home',
        link: '/',
      },
      {
        title: 'Typegen',
        link: '/typegen/'
      },
      {
        title: 'Blog',
        link: '/blog/'
      },
    ],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/src/blog`,
      },
    },
    'gatsby-transformer-remark',
  ],
}

export default config
