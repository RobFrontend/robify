import styled from "styled-components";
import { useSongId } from "../SongIdContext";

const SongBox = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 10fr 90fr;
  align-items: center;
  gap: 3.2rem;
  padding: 1.2rem;
  transition: all 0.15s;
  &:hover {
    background-color: var(--component-hover-color);
  }
`;

const PlayButton = styled.button`
  cursor: pointer;
  background: none;
  color: var(--font-color);
  justify-self: center;
  border: 1px solid var(--font-color);
  border-radius: 100px;
  padding: 1.8rem;
  transition: all 0.3s;
  &:hover {
    background-color: var(--player-backgorund-color);
  }
`;

function SongsList({ song, index }) {
  const { isId } = useSongId();
  function handleId() {
    isId(song.id);
  }
  return (
    <SongBox onClick={handleId}>
      {/* <PlayButton>▶ {index + 1}</PlayButton> */}
      <h2>{index + 1}</h2>

      <div>
        <h3>{song.title}</h3>
        <p>{song.info.slice(0, 30)}...</p>
      </div>
    </SongBox>
  );
}

export default SongsList;
