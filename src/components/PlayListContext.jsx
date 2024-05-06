import { createContext, useContext, useReducer } from "react";

const PlayListContext = createContext();

const initialState = {
  category: "all",
};

function reducer(state, action) {
  switch (action.type) {
    case "all":
      return { ...state, category: action.payload };
    case "own":
      return { ...state, category: action.payload };
    case "remake":
      return { ...state, category: action.payload };
    default:
      return { ...state, category: "all" };
  }
}

function PlayListProvider({ children }) {
  const [category, dispatch] = useReducer(reducer, initialState);

  function isRemake() {
    dispatch({ type: "remake", payload: "remake" });
  }

  function isOwn() {
    dispatch({ type: "own", payload: "own" });
  }

  function isAll() {
    dispatch({ type: "all", payload: "all" });
  }

  return (
    <PlayListContext.Provider value={{ isAll, isOwn, isRemake, category }}>
      {children}
    </PlayListContext.Provider>
  );
}

function usePlayList() {
  const context = useContext(PlayListContext);
  return context;
}

export { PlayListProvider, usePlayList };
