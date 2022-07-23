import React from "react"
import styled from "styled-components"
import { graphql, PageProps } from "gatsby"
import { withPageLayout } from "../components/with-page-layout"

const ContentTitle = styled.h1`
  text-decoration: underline;
`

const AuthorHeader = styled.div`
  font-size: 12px;
  color: #888;
`

const Template = ({location, data}: PageProps<Queries.BlogTemplateQuery>) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const pageTitle = frontmatter.title ? `blog | ${frontmatter.title}` : "blog";
  return (
    <React.Fragment>
      <ContentTitle>{frontmatter.title}</ContentTitle>
      <AuthorHeader>By {frontmatter.author} - {frontmatter.date}</AuthorHeader>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </React.Fragment>
  )
}

export const pageQuery = graphql`
query($id: String!) {
  markdownRemark(id: { eq: $id }) {
    html
    frontmatter {
      author
      date(formatString: "MMMM DD, YYYY")
      slug
      title
    }
  }
}
`

export default withPageLayout(Template)
