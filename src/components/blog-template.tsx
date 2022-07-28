import HeroImage from "../components/hero-image";
import React from "react";
import styled from "styled-components";
import { BlogPost } from "../types";
import { Card } from "../components/card";
import { PageProps } from "gatsby";
import { formatDate } from "../utils/format-date";
import { withPageLayout } from "../components/with-page-layout";

const Blog = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

const BlogPostTitle = styled.h1`
  text-decoration: underline;
  text-align: center;
`;

const BlogAuthor = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 16px;
  text-align: center;
`;

const BlogPostHeroImage = styled(HeroImage)`
  display: flex;
  flex-direction: column;
`;

const BlogContent = styled.div`
  white-space: normal;
  width: 100%;
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
    <Card
      style={{ flexDirection: "column", alignItems: "center", width: "70%" }}
    >
      <Blog>
        <BlogPostTitle>{title}</BlogPostTitle>
        <BlogAuthor>
          By {author} - {formatDate(date)}
        </BlogAuthor>
        <BlogPostHeroImage
          image={hero_image.childImageSharp.gatsbyImageData}
          alt={hero_image_alt}
          creditContent={hero_image_credit_content}
        />
        <BlogContent dangerouslySetInnerHTML={{ __html: html }} />
      </Blog>
    </Card>
  );
};

export default withPageLayout(BlogTemplate);
