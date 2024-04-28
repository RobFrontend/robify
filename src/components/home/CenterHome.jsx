import styled from "styled-components";
import CompBG from "../../ui/CompBG";
import SongsList from "./SongsList";
import { useSongs } from "../../queryAPI/useSongs";

const StyledList = styled.div`
  display: grid;
  gap: 3.2rem;
`;

function CenterHome() {
  const { isPending, songs } = useSongs();
  if (isPending)
    return (
      <CompBG>
        <h1>Loading...</h1>
      </CompBG>
    );
  return (
    <CompBG>
      <h1>Playlist</h1>
      <StyledList>
        {songs.map((song, index) => (
          <SongsList song={song} index={index} key={song.id} />
        ))}
      </StyledList>
    </CompBG>
  );
}

export default CenterHome;
