export type BlogPost = {
  html?: string;
  frontmatter: {
    author?: string;
    date?: Date;
    slug?: string;
    title?: string;
  };
  excerpt?: string;
};

export type BlogPostQueryResult = {
  error?: any;
  data?: {
    allMarkdownRemark: {
      nodes: BlogPost[];
    };
  };
};
