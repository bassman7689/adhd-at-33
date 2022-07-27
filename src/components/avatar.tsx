import * as React from "react";
import { IGatsbyImageData, GatsbyImage } from "gatsby-plugin-image";

type AvatarProps = {
  image: IGatsbyImageData;
};

export function Avatar({
  image,
}: AvatarProps): React.ReactElement<any, any> | null {
  return (
    <GatsbyImage
      image={image}
      alt="This is is me, Sean Rodman"
      imgStyle={{
        verticalAlign: "middle",
        borderRadius: "50%",
      }}
    />
  );
}
