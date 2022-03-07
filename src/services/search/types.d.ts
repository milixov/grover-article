export interface SearchArticleParams {
  page: number;
  fl: string;
  q: string;
}

interface SearchArticle {
  headline: {
    content_kicker: string;
    kicker: string;
    main: string;
    name: string;
    print_headline: string;
    seo: string;
    sub: string;
  };
  uri: string;
  abstract: string;
  pub_date: string;
}

export type SearchResponse = {
  docs: SearchArticle[];
  meta: {
    hits: number;
    offset: number;
    time: number;
  };
};
