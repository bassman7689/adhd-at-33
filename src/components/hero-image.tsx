import * as React from "react";
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image";

const HeroImage = ({
  image,
  alt,
  credit_content,
}: {
  image: IGatsbyImageData;
  alt: string;
  credit_content: string;
}): React.ReactElement<any, any> | null => {
  return (
    <React.Fragment>
      <GatsbyImage image={image} alt={alt} />
      <p>
        <div dangerouslySetInnerHTML={{ __html: credit_content }} />
      </p>
    </React.Fragment>
  );
};

export default HeroImage;
