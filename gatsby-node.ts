import path from "path"
import { BlogPostQueryResult } from "./src/types"
import { GatsbyNode } from "gatsby"
import { blogPath } from "./src/utils/blog-path"

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter
}) => {
  const { createPage } = actions;

  const blogPosts: BlogPostQueryResult = await graphql(`
    query allBlogPosts {
      allMarkdownRemark {
        nodes {
          html
          frontmatter {
            author
            date
            slug
            title
          }
          excerpt
        }
      }
    }
  `);

  if (blogPosts.error) {
    reporter.panicOnBuild(`Error while running GraphQL query: ${blogPosts.error}`)
    return
  }

  const blogLayout = path.resolve('src/components/blog-layout.tsx')

  blogPosts?.data?.allMarkdownRemark?.nodes?.forEach((node) => {
    const { date, slug } = node.frontmatter;
    if (!slug) return;

    const path = blogPath(date, slug);
    reporter.info(`path: ${path}`);
    createPage({
      path: path,
      component: blogLayout,
      context: {
        node: {...node, slug: path},
      },
    });
  });
}
