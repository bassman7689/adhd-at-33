import path from "path";
import { GatsbyNode } from "gatsby";
import { blogPath } from "./src/utils/blog-path";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  const blogPosts: { errors?: any; data?: Queries.AllBlogPostsQuery } =
    await graphql(`
      query AllBlogPosts {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
          nodes {
            html
            frontmatter {
              author
              date
              slug
              title
              published
              hero_image_alt
              hero_image_credit_content
              hero_image {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            excerpt
          }
        }
      }
    `);

  if (blogPosts.errors) {
    reporter.panicOnBuild(
      `Error while running GraphQL query: ${blogPosts.errors}`
    );
    return;
  }

  const blogLayout = path.resolve("src/components/blog-template.tsx");

  blogPosts?.data?.allMarkdownRemark?.nodes?.forEach((node) => {
    if (!node.frontmatter) return;
    const { date, slug, published } = node.frontmatter;
    if (!date || !slug || !published) return;

    const path = blogPath(date, slug);
    reporter.info(`path: ${path}`);
    createPage({
      path: path,
      component: blogLayout,
      context: {
        node: { ...node, slug: path },
      },
    });
  });
};
