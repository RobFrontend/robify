import styled from "styled-components";
import { useSongs } from "../queryAPI/useSongs";
import { usePlayList } from "../components/PlayListContext";
import { useSearch } from "../components/SearchContext";

const HomeInfo = styled.div`
  display: flex;

  gap: 1.8rem;
  padding: 1.8rem;
  margin-bottom: 1.8rem;
  @media screen and (max-width: 65em) {
    display: grid;
    grid-template-columns: 1fr;
    padding: 0.8rem;
  }
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
  @media screen and (max-width: 65em) {
    grid-row: 1;
    padding: 0.8rem;
  }
`;

function HomeGrid({ songs }) {
  const tracksNumber = songs.map((song, index) => index);
  const { category } = usePlayList();
  const { songSearch } = useSearch();
  const cat = category.category;
  return (
    <HomeInfo>
      <StyledHomeGrid>
        {songs && songs.length > 3 ? (
          songs
            .slice(0, 4)
            .map((song) => <SongImages song={song} key={song.id} />)
        ) : songs.length === 0 ? (
          <SongZero />
        ) : (
          <>
            <SongImageOne songs={songs} />
            {songs.length > 1 ? (
              <SongImageTwo songs={songs} />
            ) : (
              <SongImageOne songs={songs} />
            )}
            {songs.length > 1 ? (
              <SongImageTwo songs={songs} />
            ) : (
              <SongImageOne songs={songs} />
            )}
            <SongImageOne songs={songs} />
          </>
        )}
      </StyledHomeGrid>
      <PlaylistInfo>
        <p>Public playlist</p>
        {songSearch !== "" ? (
          <h3>Searched songs</h3>
        ) : (
          <h3>
            {cat === "own"
              ? "Own Beats"
              : cat === "remake"
              ? "Remakes"
              : "Main"}{" "}
            Playlist
          </h3>
        )}
        <p>{songs.length > 0 ? tracksNumber.at(-1) + 1 : "The is no"} Tracks</p>
      </PlaylistInfo>
    </HomeInfo>
  );
}

function SongImages({ song }) {
  return <IMG src={song.image} alt="Album Screenshot" />;
}

function SongImageOne({ songs }) {
  return <IMG src={songs[0].image} alt="Album Screenshot" />;
}
function SongImageTwo({ songs }) {
  return <IMG src={songs[1].image} alt="Album Screenshot" />;
}

function SongZero() {
  // return <IMG src={songs.image} alt="Album Screenshot" />;
  return <p>No songs...</p>;
}

export default HomeGrid;
