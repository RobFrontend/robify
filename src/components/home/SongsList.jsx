import styled from "styled-components";
import { useSongId } from "../SongIdContext";

const SongBox = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 15fr 90fr;
  align-items: center;
  gap: 3.2rem;
  padding: 1.2rem;
  transition: all 0.15s;
  border-radius: 5px;
  &:hover {
    background-color: var(--component-hover-color);
  }
`;

const NumList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50fr);
  align-items: center;
`;

const IMG = styled.img`
  width: 100%;
  border-radius: 5px;
`;

function SongsList({ song, index }) {
  const { isId } = useSongId();
  function handleId() {
    isId(song.id);
  }
  return (
    <SongBox onClick={handleId}>
      <NumList>
        <h2>{index + 1}</h2>
        <IMG src={song.image} alt="screenshot of original track or author" />
      </NumList>

      <div>
        <h3>{song.title}</h3>
        <p>{song.info.slice(0, 30)}...</p>
      </div>
    </SongBox>
  );
}

export default SongsList;
