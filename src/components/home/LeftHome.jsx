import styled from "styled-components";
import CompBG from "../../ui/CompBG";
import { usePlayList } from "../PlayListContext";

const StyledLibraryBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const BTN = styled.button`
  font-family: inherit;
  font-size: 1.8rem;
  padding: 0.6rem;
  border-radius: 5px;
  border: none;
  background: none;
  color: var(--font-color);
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background-color: var(--component-hover-color);
  }
`;

function LeftHome() {
  const { isRemake, isOwn, isAll } = usePlayList();

  return (
    <CompBG>
      <h1>Library</h1>
      <p>Playlists</p>
      <StyledLibraryBox>
        <h4>Categories</h4>
        <BTN onClick={() => isAll()}>All (Main)</BTN>
        <BTN onClick={() => isOwn()}>Own beats</BTN>
        <BTN onClick={() => isRemake()}>Remakes</BTN>
      </StyledLibraryBox>
    </CompBG>
  );
}

export default LeftHome;
