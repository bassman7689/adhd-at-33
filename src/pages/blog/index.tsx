import React from "react"
import styled from "styled-components"
import { graphql, PageProps } from "gatsby"
import { withPageLayout } from "../../components/with-page-layout"

type MarkdownNode = {
  frontmatter: {
    date: Date,
    slug: string,
    title: string,
  },
  excerpt: string,
}

function slug(node: MarkdownNode): string {
  return node.frontmatter.slug;
}

const BlogEntrySummary = ({ frontmatter: { slug, title }, excerpt }: MarkdownNode) => {
  return (
    <div>
      <a href={slug}>{title}</a>
      <p>{excerpt ? excerpt : <br />}</p>
    </div>
  )
}

const Blog = ({location, data}: PageProps<Queries.BlogQuery>) => {
  const { nodes } = data?.allMarkdownRemark;
  return (
    <React.Fragment>
      {nodes.map((node) =>
        <BlogEntrySummary key={`node-${slug(node)}`} {...node} />
      )}
    </React.Fragment>
  )
}

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
`

export default withPageLayout(Blog)
