import * as React from "react"
import { graphql, PageProps } from "gatsby"
import { withPageLayout } from "../components/with-page-layout"

const TypegenPage = ({location, data }: PageProps<Queries.TypegenPageQuery>) => {
  return (
    <React.Fragment>
      <p>Site title: {data.site?.siteMetadata?.title}</p>
      <hr />
      <p>Query Result:</p>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </React.Fragment>
  )
}

export default withPageLayout(TypegenPage)

export const query = graphql`
  query TypegenPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`
