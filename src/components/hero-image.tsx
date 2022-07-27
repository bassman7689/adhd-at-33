import * as React from "react";
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const CaptionDiv = styled.div`
  font-size: var(--caption-font-size);
  text-align: center;
`;

const HeroImage = ({
  image,
  alt,
  creditContent,
  style,
}: {
  image: IGatsbyImageData;
  alt: string;
  creditContent: string;
  style: React.CSSProperties;
}): React.ReactElement<any, any> | null => {
  return (
    <CaptionDiv style={style}>
      <GatsbyImage image={image} alt={alt} />
      <div dangerouslySetInnerHTML={{ __html: creditContent }} />
    </CaptionDiv>
  );
};

export default HeroImage;
