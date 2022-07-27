import * as React from "react";
import { withPageLayout } from "../components/with-page-layout";
import { Avatar } from "../components/avatar";
import { PageProps, graphql } from "gatsby";

function AboutPage({
  data,
}: PageProps<Queries.AboutPageQuery>): React.ReactElement<any, any> | null {
  if (!data?.file?.childImageSharp?.gatsbyImageData) return null;

  return (
    <React.Fragment>
      <Avatar image={data.file.childImageSharp.gatsbyImageData} />
    </React.Fragment>
  );
}

export const pageQuery = graphql`
  query AboutPage {
    file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "about.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 200, height: 200, layout: FIXED)
      }
    }
  }
`;

export default withPageLayout(AboutPage);
