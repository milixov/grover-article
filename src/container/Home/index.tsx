import { Link, useParams, useSearchParams } from "react-router-dom";
import { useEffect, useMemo } from "react";
import debounce from "lodash/debounce";

//components
import MainLayout from "layout/Main";

//servises
import { useSearchArticle } from "services/search";

//style
import styles from "./style.module.scss";

interface SearchParam {
  page?: string;
  q?: string;
}

const FIELD_LIST = ["headline", "uri", "abstract", "pub_date"];

const HomeContainer = (): JSX.Element => {
  const [searchParam, setSearchParam] = useSearchParams();

  let q = searchParam.get("q");
  let page = searchParam.get("page");
  const pageIndex = useMemo(() => parseInt(page || ""), [page]);

  const { data, isFetching, refetch } = useSearchArticle({
    q,
    page,
    fl: FIELD_LIST.join(","),
  });

  useEffect(() => {
    handleChangeSearchParam({});
  }, []);

  useEffect(() => {
    refetch();
  }, [page]);

  useEffect(() => {
    if (pageIndex > 0) {
      handleChangeSearchParam({ page: "0" });
    } else {
      refetch();
    }
  }, [q]);

  const handleChangeSearchParam = (params: SearchParam) => {
    setSearchParam({
      page: params?.page || page || "0",
      q: params?.q || q || "",
    });
  };

  const handleSearchTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeSearchParam({ q: e.target.value });
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
            <li key={article?.uri}>
              <Link to={article?.uri.replace("nyt://", "")}>
                {article?.headline?.main}
              </Link>
            </li>
          ))}
      </ul>
      <div className={styles.navigation}>
        <div>
          {pageIndex > 0 && (
            <button
              className="uk-button uk-button-link uk-text-primary"
              onClick={handlePreviousPageClick}
            >
              Prev page
            </button>
          )}
        </div>
        <div>
          <button
            className="uk-button uk-button-link uk-text-primary"
            onClick={handleNextPageClick}
          >
            Next page
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomeContainer;
