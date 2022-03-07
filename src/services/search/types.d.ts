import { Article } from "lib/interfaces";
export interface SearchArticleParams {
  page: number;
  fl: string;
  q: string;
}

export type SearchResponse = {
  docs: Article[];
  meta: {
    hits: number;
    offset: number;
    time: number;
  };
};
