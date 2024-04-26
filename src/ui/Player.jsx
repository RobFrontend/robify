import styled from "styled-components";
import { useSongs } from "../queryAPI/useSongs";
import { useSongId } from "../components/SongIdContext";

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
    <StyledPlayer>
      <PlayerBox>
        {songs
          .filter((song) => song.id === songId.songId)
          .map((filteredSong) => (
            <SongPlaying song={filteredSong} key={filteredSong.id} />
          ))}
      </PlayerBox>
    </StyledPlayer>
  );
}

function SongPlaying({ song }) {
  return (
    <>
      <p>{song.title}</p>
      <Audio controls autoPlay src={song.audio} />
    </>
  );
}

export default Player;
