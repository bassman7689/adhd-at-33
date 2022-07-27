import { IGatsbyImageData } from "gatsby-plugin-image";

export type BlogPost = {
  readonly frontmatter: {
    readonly author: string | null;
    readonly date: string | null;
    readonly slug: string | null;
    readonly title: string | null;
    readonly published: boolean | null;
    readonly hero_image: IGatsbyImageData | null;
    readonly hero_image_alt: string | null;
    readonly hero_image_credit_content: string | null;
  } | null;
  readonly html: string | null;
  readonly excerpt: string | null;
};
