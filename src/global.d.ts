import { UseQueryResult } from "react-query";

type GeneralResponse<T = any> = {
  copyright: string;
  response: T;
  status: string;
};

type QueryResult<T = any> = (
  ...args: any
) => UseQueryResult<GeneralResponse<T>, unknown>;
