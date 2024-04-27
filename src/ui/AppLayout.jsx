import { Outlet } from "react-router-dom";
import Player from "./Player";
import Main from "./Main";
import CurrentPage from "./CurrentPage";
import Header from "./Header";
import Home from "../pages/Home";

function AppLayout() {
  return (
    <Main>
      <Header />
      <CurrentPage>
        <Home />
      </CurrentPage>
      <Player />
    </Main>
  );
}

export default AppLayout;
