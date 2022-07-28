import * as React from "react";
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";

const CaptionDiv = styled.div`
  font-size: var(--caption-font-size);
  text-align: center;
`;

const ImageContent = styled(GatsbyImage)`
  margin-bottom: 16px;
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
    <div style={style}>
      <ImageContent image={image} alt={alt} />
      <CaptionDiv dangerouslySetInnerHTML={{ __html: creditContent }} />
    </div>
  );
};

export default HeroImage;
