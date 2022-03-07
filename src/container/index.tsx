import { Routes, Route } from "react-router-dom";

//container
import HomeContainer from "container/Home";
import ArticleContainer from "container/Article";

const Container = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/article/:uri" element={<ArticleContainer />} />
    </Routes>
  );
};

export default Container;
