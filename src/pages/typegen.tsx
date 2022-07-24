import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { withPageLayout } from "../components/with-page-layout";

const TypegenPage = ({
  data,
}: PageProps<Queries.TypegenPageQuery>): React.ReactElement<
  any,
  any
> | null => {
  return (
    <React.Fragment>
      <p>Site title: {data.site?.siteMetadata?.title}</p>
      <hr />
      <p>Query Result:</p>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </React.Fragment>
  );
};

export default withPageLayout(TypegenPage);

export const query = graphql`
  query TypegenPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
