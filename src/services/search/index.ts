import { QueryResult } from "global";
import { useQuery } from "react-query";
import { http } from "utils/http";
import { SearchArticleParams, SearchResponse } from "./types";

export const useSearchArticle: QueryResult<SearchResponse> = (
  params: SearchArticleParams
) =>
  useQuery(
    ["search", params.q, params.page],
    () => http.get("/search/v2/articlesearch.json", { params }),
    { enabled: !!params.page, keepPreviousData: true }
  );
