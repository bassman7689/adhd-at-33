import React from "react";
import styled from "styled-components";
import { PageProps } from "gatsby";
import { withPageLayout } from "../components/with-page-layout";
import { BlogPost } from "../types";
import { formatDate } from "../utils/format-date";

const ContentTitle = styled.h1`
  text-decoration: underline;
`;

const AuthorHeader = styled.div`
  font-size: 12px;
  color: #888;
`;

const Template = ({
  pageContext: { node },
}: PageProps & { pageContext: { node: BlogPost } }) => {
  const { frontmatter, html } = node;
  const { title, author, date } = frontmatter;
  return (
    <React.Fragment>
      <ContentTitle>{title}</ContentTitle>
      <AuthorHeader>
        By {author} - {formatDate(date)}
      </AuthorHeader>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </React.Fragment>
  );
};

export default withPageLayout(Template);
