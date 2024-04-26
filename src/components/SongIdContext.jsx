import { createContext, useContext, useReducer } from "react";

const SongIdContext = createContext();

const initialState = {
  songId: 1,
};

function reducer(state, action) {
  switch (action.type) {
    case "isId":
      return { ...state, songId: action.payload };

    default:
      return { ...state, songId: 1 };
  }
}

function SongIdProvider({ children }) {
  const [songId, dispatch] = useReducer(reducer, initialState);

  function isId(id) {
    dispatch({ type: "isId", payload: id });
  }

  return (
    <SongIdContext.Provider value={{ songId, isId }}>
      {children}
    </SongIdContext.Provider>
  );
}

function useSongId() {
  const context = useContext(SongIdContext);
  return context;
}

export { SongIdProvider, useSongId };
