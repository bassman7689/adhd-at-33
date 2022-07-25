import React from "react";
import { blogPath } from "../utils/blog-path";
import { graphql, PageProps } from "gatsby";
import { withPageLayout } from "../components/with-page-layout";

type BlogEntrySummaryProps = {
  key: string;
  readonly frontmatter: {
    readonly date: string | null;
    readonly slug: string | null;
    readonly title: string | null;
    readonly published: boolean | null;
  } | null;
  readonly excerpt: string | null;
};

const BlogEntrySummary = ({ frontmatter, excerpt }: BlogEntrySummaryProps) => {
  if (frontmatter == null) {
    return null;
  }

  const { date, slug, title, published } = frontmatter;
  if (!date || !slug || !title || !published) return null;

  return (
    <div>
      <a href={blogPath(date, slug)}>{title}</a>
      <p>{excerpt ? excerpt : <br />}</p>
    </div>
  );
};

const IndexPage = ({ data }: PageProps<Queries.IndexPageQuery>) => {
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
  query IndexPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          date
          slug
          title
          published
        }
        excerpt
      }
    }
  }
`;

export default withPageLayout(IndexPage);
