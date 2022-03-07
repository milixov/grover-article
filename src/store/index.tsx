import { Article } from "lib/interfaces";
import { createContext, useReducer, Dispatch } from "react";
import { ACTIONS } from "./actions";

interface Props {
  children?: React.ReactNode;
}

interface State {
  article: Article | null;
}

interface Action {
  type: string;
  value?: any;
}

type Context = {
  state?: State;
  dispatch?: Dispatch<Action>;
};

const initialState = { article: null };

export const GlobalContext = createContext<Context>({
  state: initialState,
  dispatch: () => {},
});

const globalReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTIONS.SET_ARTICLE: {
      return { ...state, article: action.value };
    }
    case ACTIONS.CLEAR_ARTICLE: {
      return { ...state, article: null };
    }
    default:
      return state;
  }
};

const GlobalContextProvider = (props: Props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(globalReducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
