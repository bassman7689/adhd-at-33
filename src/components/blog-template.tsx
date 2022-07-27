import HeroImage from "../components/hero-image";
import React from "react";
import styled from "styled-components";
import { BlogPost } from "../types";
import { PageProps } from "gatsby";
import { formatDate } from "../utils/format-date";
import { withPageLayout } from "../components/with-page-layout";

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

  const {
    title,
    author,
    date,
    hero_image,
    hero_image_alt,
    hero_image_credit_content,
  } = frontmatter;
  if (
    !title ||
    !author ||
    !date ||
    !hero_image ||
    !hero_image_alt ||
    !hero_image_credit_content
  ) {
    return null;
  }

  return (
    <React.Fragment>
      <ContentTitle>{title}</ContentTitle>
      <AuthorHeader>
        By {author} - {formatDate(date)}
      </AuthorHeader>
      <HeroImage
        image={hero_image}
        alt={hero_image_alt}
        credit_content={hero_image_credit_content}
      />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </React.Fragment>
  );
};

export default withPageLayout(BlogTemplate);
