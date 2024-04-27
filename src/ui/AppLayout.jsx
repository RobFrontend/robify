import { Outlet } from "react-router-dom";
import Player from "./Player";
import Main from "./Main";
import CurrentPage from "./CurrentPage";
import Header from "./Header";

function AppLayout() {
  return (
    <Main>
      <Header />
      {/* <CurrentPage> */}
      <Outlet />
      {/* </CurrentPage> */}
      <Player />
    </Main>
  );
}

export default AppLayout;
