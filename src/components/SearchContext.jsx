import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [songSearch, setSongSearch] = useState("");

  return (
    <SearchContext.Provider value={{ songSearch, setSongSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

function useSearch() {
  const context = useContext(SearchContext);
  return context;
}

export { useSearch, SearchProvider };
