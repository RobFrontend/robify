import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SongIdProvider } from "./components/SongIdContext.jsx";
import { PlayListProvider } from "./components/PlayListContext.jsx";
import { SearchProvider } from "./components/SearchContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SongIdProvider>
      <PlayListProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </PlayListProvider>
    </SongIdProvider>
  </React.StrictMode>
);
