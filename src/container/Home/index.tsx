import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useContext } from "react";
import debounce from "lodash/debounce";

//components
import MainLayout from "layout/Main";

//servises
import { useSearchArticle } from "services/search";

//store
import { GlobalContext } from "store";
import { ACTIONS } from "store/actions";

//types
import { Article } from "lib/interfaces";

//style
import styles from "./style.module.scss";
import Button from "components/Button";

interface SearchParam {
  page?: string;
  q?: string;
}

const FIELD_LIST = ["headline", "uri", "abstract", "pub_date", "web_url"];
const FILTER = 'document_type:("article")';

const HomeContainer = (): JSX.Element => {
  const navigate = useNavigate();
  const { dispatch } = useContext(GlobalContext);
  const [searchParam, setSearchParam] = useSearchParams();

  let q = searchParam.get("q");
  let page = searchParam.get("page");
  const pageIndex = useMemo(() => parseInt(page || ""), [page]);

  const { data, isFetching, refetch } = useSearchArticle({
    q,
    page,
    fl: FIELD_LIST.join(","),
    fq: FILTER,
  });

  useEffect(() => {
    handleChangeSearchParam({});
  }, []);

  useEffect(() => {
    refetch();
  }, [page]);

  const handleChangeSearchParam = (params: SearchParam) => {
    setSearchParam({
      page: params?.page || page || "0",
      q: params?.q || q || "",
    });
  };

  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeSearchParam({ q: e.target.value });
    if (pageIndex > 0) {
      handleChangeSearchParam({ page: "0", q: e.target.value });
    } else {
      refetch();
    }
  };

  const debouncedSearchTextChange = useMemo(
    () => debounce(handleSearchTextChange, 700),
    []
  );

  const handleNextPageClick = () => {
    handleChangeSearchParam({ page: `${pageIndex + 1}` });
  };

  const handlePreviousPageClick = () => {
    if (pageIndex > 0) {
      handleChangeSearchParam({ page: `${pageIndex - 1}` });
    }
  };

  const handleClickOnArticle = (article: Article) => {
    dispatch && dispatch({ type: ACTIONS.SET_ARTICLE, value: article });
    navigate(`/article/${article?.uri?.replace(/nyt:\/\/.*\//, "")}`);
  };

  return (
    <MainLayout>
      <label>
        <strong>Type search query term in here:</strong>
      </label>
      <input
        type="text"
        placeholder="Search"
        className="uk-input"
        onChange={debouncedSearchTextChange}
      />
      <br />
      <label>
        <strong>Results:</strong>
      </label>
      <ul className={`${styles.articles} uk-list uk-list-divider`}>
        {isFetching && <div uk-spinner="ratio: 1" />}
        {!isFetching &&
          data?.response?.docs?.map((article) => (
            <li
              key={article?.uri}
              className={styles.articleItem}
              onClick={() => handleClickOnArticle(article)}
            >
              {article?.headline?.main}
            </li>
          ))}
      </ul>
      <div className={styles.navigation}>
        <div>
          {pageIndex > 0 && (
            <Button onClick={handlePreviousPageClick}>Prev page</Button>
          )}
        </div>
        <div>
          <Button onClick={handleNextPageClick}>Next page</Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomeContainer;
