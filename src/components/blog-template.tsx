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

const BlogTemplate = ({
  pageContext: { node },
}: PageProps<any, { node: BlogPost }>): React.ReactElement<any, any> | null => {
  const { frontmatter, html } = node;
  if (!frontmatter || !html) return null;

  const { title, author, date } = frontmatter;
  if (!title || !author || !date) return null;

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

export default withPageLayout(BlogTemplate);
