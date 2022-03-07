import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

//container
import HomeContainer from "./container/Home";
import ArticleContainer from "container/Article";

import "./App.scss";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/article/:uri" element={<ArticleContainer />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
