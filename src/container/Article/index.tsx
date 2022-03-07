import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//store
import { GlobalContext } from "store";
import { ACTIONS } from "store/actions";

//component
import MainLayout from "layout/Main";

//style
import styles from "./style.module.scss";

const ArticleContainer = (): JSX.Element => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    return () => {
      dispatch && dispatch({ type: ACTIONS.CLEAR_ARTICLE });
    };
  }, []);

  const hanldeBackButton = () => {
    navigate(-1);
  };

  return (
    <MainLayout>
      <button
        className="uk-button uk-button-link uk-text-primary"
        onClick={hanldeBackButton}
      >
        {`<`} Go to results page
      </button>
      <article className={styles.article}>
        <h2>{state?.article?.headline.main}</h2>
        <span className="uk-text-italic">
          {new Date(state?.article?.pub_date as string).toDateString()}
        </span>
        <p>{state?.article?.abstract}</p>
      </article>
      <a
        className="uk-link-muted uk-text-primary"
        href={(state?.article?.web_url as string) || "#"}
        target="_blank"
      >
        Read the full article
      </a>
    </MainLayout>
  );
};

export default ArticleContainer;
