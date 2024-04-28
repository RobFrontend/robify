import styled from "styled-components";
import { useSongs } from "../../queryAPI/useSongs";
import CompBG from "../../ui/CompBG";
import { useSongId } from "../SongIdContext";

const StyledInfo = styled.div`
  display: grid;
  gap: 1.2rem;
  padding-top: 3.2rem;
`;

function RightHome() {
  const { songId } = useSongId();
  let { songs, isPending } = useSongs();
  if (isPending) return <h2>Loading...</h2>;
  return (
    <CompBG>
      <h1>About song</h1>
      {songs
        .filter((song) => song.id === songId.songId)
        .map((songInfo) => (
          <SongInfo song={songInfo} key={songInfo.id} />
        ))}
    </CompBG>
  );
}

function SongInfo({ song }) {
  return (
    <StyledInfo>
      <h4>
        Title:<br></br>
        {song.title}
      </h4>
      <p>
        How it was made:<br></br>
        {song.info}
      </p>
    </StyledInfo>
  );
}

export default RightHome;
