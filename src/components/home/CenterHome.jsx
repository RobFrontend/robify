import styled from "styled-components";
import CompBG from "../../ui/CompBG";
import SongsList from "./SongsList";
import { useSongs } from "../../queryAPI/useSongs";
import HomeGrid from "../../ui/HomeGrid";
import { usePlayList } from "../PlayListContext";

const StyledList = styled.div`
  display: grid;
  gap: 1.8rem;
  margin-top: 1.8rem;
`;

function CenterHome() {
  let { isPending, songs } = useSongs();
  const { category } = usePlayList();

  let cat = category.category;

  if (cat === "remake") {
    songs = songs.filter((song) => song.remake === true);
  }
  if (cat === "own") {
    songs = songs.filter((song) => song.own === true);
  }

  if (isPending)
    return (
      <CompBG>
        <h1>Loading...</h1>
      </CompBG>
    );
  return (
    <CompBG>
      <HomeGrid />
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
