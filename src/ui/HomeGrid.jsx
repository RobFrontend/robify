import styled from "styled-components";
import { useSongs } from "../queryAPI/useSongs";

const HomeInfo = styled.div`
  display: flex;
  gap: 1.8rem;
  padding: 1.8rem;
  margin-bottom: 1.8rem;
`;

const StyledHomeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 50fr);
  width: 200px;
  border-radius: 5px;
  overflow: hidden;
`;

const IMG = styled.img`
  width: 100%;
  opacity: 0.8;
  transition: all 0.3s;
  &:hover {
    opacity: 1;
  }
`;

const PlaylistInfo = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.2rem;
`;

function HomeGrid() {
  const { songs, isPending } = useSongs();
  const tracksNumber = songs.map((song, index) => index);

  if (isPending) return <h1>Loading..</h1>;
  return (
    <HomeInfo>
      <StyledHomeGrid>
        {songs.slice(0, 4).map((song) => (
          <SongImages song={song} key={song.id} />
        ))}
      </StyledHomeGrid>
      <PlaylistInfo>
        <p>Public playlist</p>
        <h3>Main Playlist</h3>
        <p>{tracksNumber.at(-1) + 1} Tracks</p>
      </PlaylistInfo>
    </HomeInfo>
  );
}

function SongImages({ song }) {
  return <IMG src={song.image} alt="Album Screenshot" />;
}

export default HomeGrid;
