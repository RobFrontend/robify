import styled from "styled-components";
import { useSongs } from "../queryAPI/useSongs";
import { useSongId } from "../components/SongIdContext";
import { Fade } from "react-awesome-reveal";
import ReactAudioPlayer from "react-audio-player";
import { useEffect, useRef, useState } from "react";

const StyledPlayer = styled.div`
  position: relative;
  min-height: 10vh;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: var(--player-backgorund-color);
  overflow: hidden;
`;

const PlayerBox = styled.div`
  display: grid;
  justify-items: center;
  padding: 1.2rem;
  gap: 0.6rem;
`;

const Audio = styled.audio`
  width: 80%;
  height: 3vh;
  @media screen and (max-width: 50em) {
    width: 90%;
  }
`;
const RAudio = styled(ReactAudioPlayer)`
  width: 80%;
  height: 3vh;
  @media screen and (max-width: 50em) {
    width: 90%;
  }
`;

const Background = styled.img`
  position: absolute;
  width: 100%;
  top: -50%;
  transform: translateY(-50%);
  left: -5px;
  filter: blur(9px);
  opacity: 0.1;
`;

function Player() {
  const { songId } = useSongId();
  let { songs, isPending } = useSongs();
  const currentSong = songs?.find((song) => song.id === songId.songId);

  if (isPending) return <h3>Loading</h3>;

  return (
    <Fade delay={500} triggerOnce>
      <StyledPlayer>
        <Background src={currentSong.image} />

        <Fade direction="up" triggerOnce>
          <PlayerBox>
            {songs
              .filter((song) => song.id === songId.songId)
              .map((filteredSong) => (
                <SongPlaying song={filteredSong} key={filteredSong.id} />
              ))}
          </PlayerBox>
        </Fade>
      </StyledPlayer>
    </Fade>
  );
}

function SongPlaying({ song, index }) {
  return (
    <>
      {/* <p>{song.title}</p>
      <Audio
        controlsList="nodownload noplaybackrate"
        controls
        autoPlay
        src={song.audio}
      /> */}
      <p>{song.title}</p>
      <RAudio
        src={song.audio}
        controlsList="nodownload noplaybackrate"
        autoPlay
        controls
      />
    </>
  );
}

export default Player;
