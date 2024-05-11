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
  @media screen and (max-width: 101em) {
    grid-template-columns: 15fr 85fr;
  }
  @media screen and (max-width: 71em) {
    grid-template-columns: 20fr 80fr;
    gap: 0.8rem;
  }
  @media screen and (max-width: 65em) {
    grid-template-columns: 25fr 75fr;
  }
  @media screen and (max-width: 50em) {
    grid-template-columns: 15fr 85fr;
  }
  @media screen and (max-width: 30em) {
    grid-template-columns: 20fr 80fr;
  }
  @media screen and (max-width: 25em) {
    grid-template-columns: 25fr 75fr;
  }
  @media screen and (max-width: 21em) {
    grid-template-columns: 30fr 70fr;
  }
`;

const NumList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50fr);
  align-items: center;
`;

const H2 = styled.h2`
  @media screen and (max-width: 65em) {
    /* display: none; */
  }
  @media screen and (max-width: 50em) {
    display: block;
  }
`;

const Pinfo = styled.p`
  @media screen and (max-width: 62em) {
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
            <ScaleLoader color="var(--font-color)" height={10} width={2} />
          </div>
        ) : (
          <H2>{index + 1}</H2>
        )}
        <IMG src={song.image} alt="screenshot of original track or author" />
      </NumList>

      <div>
        {window.innerWidth > 340 ? (
          <h3>{song.title}</h3>
        ) : (
          <h3>
            {song.title.slice(0, 10)}
            {song.title.length > 10 && "..."}
          </h3>
        )}
        {window.innerWidth > 380 ? (
          <Pinfo>{song.info.slice(0, 30)}...</Pinfo>
        ) : (
          <Pinfo>{song.info.slice(0, 20)}...</Pinfo>
        )}
      </div>
    </SongBox>
  );
}

export default SongsList;
