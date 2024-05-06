import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { SongIdProvider } from "./components/SongIdContext.jsx";
import { PlayListProvider } from "./components/PlayListContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SongIdProvider>
      <PlayListProvider>
        <App />
      </PlayListProvider>
    </SongIdProvider>
  </React.StrictMode>
);
