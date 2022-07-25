export type BlogPost = {
  readonly frontmatter: {
    readonly author: string | null;
    readonly date: string | null;
    readonly slug: string | null;
    readonly title: string | null;
    readonly published: boolean | null;
  } | null;
  readonly html: string | null;
  readonly excerpt: string | null;
};
