import { QueryClient, QueryClientProvider } from "react-query";

//container
import Container from "container";

//state
import GlobalContextProvider from "store";

import "./App.scss";

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

const App = (): JSX.Element => {
  return (
    <div className="App">
      <GlobalContextProvider>
        <QueryClientProvider client={queryClient}>
          <Container />
        </QueryClientProvider>
      </GlobalContextProvider>
    </div>
  );
};

export default App;
