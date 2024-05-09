import { Outlet } from "react-router-dom";
import Player from "./Player";
import Main from "./Main";
import CurrentPage from "./CurrentPage";
import Header from "./Header";
import Home from "../pages/Home";
import { Fade } from "react-awesome-reveal";

function AppLayout() {
  return (
    <Main>
      <Header />
      <CurrentPage>
        <Fade triggerOnce>
          <Home />
        </Fade>
      </CurrentPage>
      <Player />
    </Main>
  );
}

export default AppLayout;
