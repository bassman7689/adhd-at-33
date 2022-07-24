import path from "path";
import type { GatsbyConfig } from "gatsby";

const gatsbyRequiredRules = path.join(
  __dirname,
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
);

const config: GatsbyConfig = {
  siteMetadata: {
    title: `ADHD at 33`,
    siteUrl: "https://www.adhdat33.com",
    menuLinks: [
      {
        title: "Home",
        link: "/",
      },
      {
        title: "About",
        link: "/about/",
      },
    ],
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/src/blog`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        rulePaths: [gatsbyRequiredRules],
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", "bower_components", ".cache", "public"],
      },
    },
  ],
};

export default config;
