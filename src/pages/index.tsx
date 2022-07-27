import HeroImage from "../components/hero-image";
import React from "react";
import styled from "styled-components";
import { Card } from "../components/card";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { blogPath } from "../utils/blog-path";
import { graphql, navigate, PageProps } from "gatsby";
import { withPageLayout } from "../components/with-page-layout";

const BlogHeroImage = styled(HeroImage)`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
`;

const BlogContent = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  overflow-wrap: break-word;
  margin: auto;
`;

const BlogTitle = styled.h2`
  text-align: left;
  font-weight: bold;
  color: black;
`;

const BlogExcerpt = styled.div`
  justify-self: flex-end;
`;

type BlogEntrySummaryProps = {
  key: string;
  readonly frontmatter: {
    readonly date: string | null;
    readonly slug: string | null;
    readonly title: string | null;
    readonly published: boolean | null;
    readonly hero_image: IGatsbyImageData | null;
    readonly hero_image_alt: string | null;
    readonly hero_image_credit_content: string | null;
  } | null;
  readonly excerpt: string | null;
};

const BlogEntrySummary = ({ frontmatter, excerpt }: BlogEntrySummaryProps) => {
  if (frontmatter == null) {
    return null;
  }

  const {
    date,
    slug,
    title,
    published,
    hero_image,
    hero_image_alt,
    hero_image_credit_content,
  } = frontmatter;
  if (
    !date ||
    !slug ||
    !title ||
    !published ||
    !hero_image ||
    !hero_image_alt ||
    !hero_image_credit_content
  )
    return null;

  const postPath = blogPath(date, slug);

  const handleCardClick = (postPath: string): ((event) => void) => {
    return () => {
      navigate(postPath);
    };
  };
  return (
    <Card onClick={handleCardClick(postPath)}>
      <BlogHeroImage
        image={hero_image.childImageSharp.gatsbyImageData}
        alt={hero_image_alt}
        creditContent={hero_image_credit_content}
      />
      <BlogContent>
        <BlogTitle>{title}</BlogTitle>
        <BlogExcerpt>{excerpt ? excerpt : <br />}</BlogExcerpt>
      </BlogContent>
    </Card>
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
          hero_image {
            childImageSharp {
              gatsbyImageData(width: 300, layout: FIXED)
            }
          }
          hero_image_alt
          hero_image_credit_content
        }
        excerpt
      }
    }
  }
`;

export default withPageLayout(IndexPage);
