import styled from "styled-components";
import CenterHome from "../components/home/CenterHome";
import LeftHome from "../components/home/LeftHome";
import RightHome from "../components/home/RightHome";

const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 20fr 60fr 20fr;
  gap: 4.8rem;
  padding: 3.2rem;
  @media screen and (max-width: 100em) {
    grid-template-columns: 25fr 50fr 25fr;
  }
  @media screen and (max-width: 90em) {
    grid-template-columns: 25fr 50fr 25fr;
    gap: 2.4rem;
  }
  @media screen and (max-width: 62em) {
    grid-template-columns: 30fr 40fr 30fr;
    gap: 2.4rem;
  }
`;

function Home() {
  return (
    <StyledHome>
      <LeftHome />
      <CenterHome />
      <RightHome />
    </StyledHome>
  );
}

export default Home;
