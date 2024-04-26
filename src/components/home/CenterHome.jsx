import styled from "styled-components";
import CompBG from "../../ui/CompBG";
import SongsList from "./SongsList";

const StyledList = styled.div`
  display: grid;
  gap: 3.2rem;
`;

function CenterHome({ songs }) {
  return (
    <CompBG>
      <h1>Playlist</h1>
      <StyledList>
        {songs.map((song) => (
          <SongsList song={song} key={song.id} />
        ))}
      </StyledList>
    </CompBG>
  );
}

export default CenterHome;
