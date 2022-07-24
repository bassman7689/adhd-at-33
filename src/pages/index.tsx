import React from "react";
import { blogPath } from "../utils/blog-path";
import { graphql, PageProps } from "gatsby";
import { withPageLayout } from "../components/with-page-layout";

type BlogEntrySummaryProps = {
  frontmatter: {
    date: string | null;
    slug: string | null;
    title: string | null;
  } | null;
  excerpt: string | null;
};

const BlogEntrySummary = ({ frontmatter, excerpt }: BlogEntrySummaryProps) => {
  if (frontmatter == null) {
    return null;
  }

  const { date, slug, title } = frontmatter;
  if (!date || !slug || !title) return null;

  return (
    <div>
      <a href={blogPath(date, slug)}>{title}</a>
      <p>{excerpt ? excerpt : <br />}</p>
    </div>
  );
};

const Blog = ({ data }: PageProps<Queries.BlogQuery>) => {
  const { nodes } = data?.allMarkdownRemark;
  return (
    <React.Fragment>
      {nodes.map((node) => (
        <BlogEntrySummary key={`node-${node?.frontmatter?.slug}`} {...node} />
      ))}
    </React.Fragment>
  );
};

export const pageQuery = graphql`
  query Blog {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date
          slug
          title
        }
        excerpt
      }
    }
  }
`;

export default withPageLayout(Blog);
