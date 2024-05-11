import styled from "styled-components";
import { useSongId } from "../SongIdContext";
import { ScaleLoader } from "react-spinners";
import { useState } from "react";

const SongBox = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 10fr 90fr;
  align-items: center;
  gap: 3.2rem;
  padding: 1.2rem;
  transition: all 0.15s;
  border-radius: 5px;
  &:hover {
    background-color: var(--component-hover-color);
  }
  @media screen and (max-width: 65em) {
    grid-template-columns: 20fr 80fr;
    gap: 0.8rem;
  }
`;

const NumList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50fr);
  align-items: center;
`;

const H2 = styled.h2`
  @media screen and (max-width: 65em) {
    display: none;
  }
  @media screen and (max-width: 50em) {
    display: block;
  }
`;

const IMG = styled.img`
  width: 100%;
  border-radius: 5px;
`;

function SongsList({ song, index }) {
  const { isId, songId } = useSongId();
  const [activeSong, setActiveSong] = useState(false);
  function handleId() {
    isId(song.id);
    setActiveSong(true);
  }
  return (
    <SongBox
      className={
        songId.songId === song.id ? "active-song song-box" : "song-box"
      }
      onClick={handleId}
    >
      <NumList>
        {songId.songId === song.id && activeSong ? (
          <div>
            <ScaleLoader color="var(--font-color)" />
          </div>
        ) : (
          <H2>{index + 1}</H2>
        )}
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
