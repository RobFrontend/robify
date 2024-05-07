import styled from "styled-components";
import CompBG from "../../ui/CompBG";
import { usePlayList } from "../PlayListContext";
import { useSearch } from "../SearchContext";

const StyledLibraryBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-top: 3.2rem;
`;

const H4 = styled.h4`
  margin-bottom: 1.8rem;
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

const StyledInput = styled.input`
  width: 100%;
  border-radius: 5px;
  border: none;
  padding: 0.3rem;
  outline: none;
  opacity: 0.9;
  transition: all 0.3s;
  color: var(--body-background-color);
  font-family: inherit;
  font-weight: 500;
  background-color: #eee;
  &:hover {
    opacity: 1;
  }
  margin-bottom: 3.2rem;
`;

function LeftHome() {
  const { isRemake, isOwn, isAll } = usePlayList();
  const { setSongSearch } = useSearch();

  // function handleSearch(e) {
  //   useSongSearch(e);
  // }

  return (
    <CompBG>
      <h1>Library</h1>

      <StyledLibraryBox>
        <StyledLibraryBox>
          <form>
            <StyledInput
              placeholder="Search..."
              onChange={(e) => setSongSearch(e.target.value)}
            />
          </form>
        </StyledLibraryBox>
        <H4>Playlists</H4>
        <BTN onClick={() => isAll()}>All (Main)</BTN>
        <BTN onClick={() => isOwn()}>Own beats</BTN>
        <BTN onClick={() => isRemake()}>Remakes</BTN>
      </StyledLibraryBox>
    </CompBG>
  );
}

export default LeftHome;
