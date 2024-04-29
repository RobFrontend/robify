import styled from "styled-components";
import CenterHome from "../components/home/CenterHome";
import LeftHome from "../components/home/LeftHome";
import RightHome from "../components/home/RightHome";

const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 20fr 60fr 20fr;

  gap: 4.8rem;
  padding: 3.2rem;
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
