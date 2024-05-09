import styled from "styled-components";
import { useSongs } from "../queryAPI/useSongs";
import { useSongId } from "../components/SongIdContext";
import { Fade } from "react-awesome-reveal";

const StyledPlayer = styled.div`
  min-height: 10vh;
  position: fixed;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background-color: var(--player-backgorund-color);
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
`;

function Player() {
  const { songId } = useSongId();
  let { songs, isPending } = useSongs();

  if (isPending) return <h3>Loading</h3>;

  return (
    <Fade delay={500} triggerOnce>
      <StyledPlayer>
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
      <p>{song.title}</p>
      <Audio
        controlsList="nodownload noplaybackrate"
        controls
        autoPlay
        src={song.audio}
      />
    </>
  );
}

export default Player;
