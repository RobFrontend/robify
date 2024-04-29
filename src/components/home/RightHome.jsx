import styled from "styled-components";
import { useSongs } from "../../queryAPI/useSongs";
import CompBG from "../../ui/CompBG";
import { useSongId } from "../SongIdContext";
import { Link } from "react-router-dom";

const StyledInfo = styled.div`
  display: grid;
  gap: 1.8rem;
  padding-top: 3.2rem;
`;

const IMG = styled.img`
  width: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.4rem;
  color: inherit;
  padding: 0.4rem;
  border-bottom: 1px solid var(--font-color);
`;

function RightHome() {
  const { songId } = useSongId();
  let { songs, isPending } = useSongs();
  if (isPending) return <h2>Loading...</h2>;
  return (
    <CompBG>
      <h1>About</h1>
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
      <IMG src={song.image} alt="Screenshot of original track or author" />
      <div>
        <p>How it was made:</p>
        <p> {song.info}</p>
      </div>
      <div>
        <p>
          Category:<br></br>
        </p>
        {song.remake && <p>- Remake of the original track</p>}
        {song.sampled && <p>- Sampled from original track</p>}
        {song.own && <p>- Created by me in FL Studio</p>}
      </div>
      {song.linkoriginal && (
        <div>
          <StyledLink to={song.linkoriginal} target="_blank">
            Link to original track
          </StyledLink>
        </div>
      )}
      {song.linkown && (
        <div>
          <StyledLink to={song.linkown} target="_blank">
            Link to my version
          </StyledLink>
        </div>
      )}
    </StyledInfo>
  );
}

export default RightHome;
