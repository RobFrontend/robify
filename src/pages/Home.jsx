import styled from "styled-components";
import CenterHome from "../components/home/CenterHome";
import LeftHome from "../components/home/LeftHome";
import RightHome from "../components/home/RightHome";
import { useSongs } from "../queryAPI/useSongs";

const StyledHome = styled.div`
  display: grid;
  grid-template-columns: 20fr 60fr 20fr;
  gap: 4.8rem;
  padding: 3.2rem;
`;

function Home() {
  const { isPending, songs } = useSongs();
  if (isPending)
    return (
      <StyledHome>
        <h1>Loading</h1>
      </StyledHome>
    );
  return (
    <StyledHome>
      <LeftHome />
      <CenterHome songs={songs} />
      <RightHome />
    </StyledHome>
  );
}

export default Home;
