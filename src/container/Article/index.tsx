import { Link, useNavigate, useParams } from "react-router-dom";
import MainLayout from "layout/Main";

const ArticleContainer = (): JSX.Element => {
  const { uri } = useParams();
  const navigate = useNavigate();

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
      {uri}
      <Link to="">Read the full article</Link>
    </MainLayout>
  );
};

export default ArticleContainer;
