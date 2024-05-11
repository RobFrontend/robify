import styled from "styled-components";
import CenterHome from "../components/home/CenterHome";
import LeftHome from "../components/home/LeftHome";
import RightHome from "../components/home/RightHome";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const StyledHome = styled.div`
  position: relative;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 20fr 60fr 20fr;
  gap: 4.8rem;
  padding: 3.2rem;
  @media screen and (max-width: 100em) {
    grid-template-columns: 25fr 50fr 25fr;
  }
  @media screen and (max-width: 90em) {
    grid-template-columns: 25fr 50fr 25fr;
    gap: 2.4rem;
  }
  @media screen and (max-width: 65em) {
    padding: 1.8rem;
  }
  @media screen and (max-width: 62em) {
    grid-template-columns: 25fr 45fr 30fr;
    gap: 2.4rem;
  }
  @media screen and (max-width: 50em) {
    grid-template-columns: 1fr;
    z-index: 0;
  }
`;
const StyledLeft = styled.div`
  @media screen and (max-width: 50em) {
    position: absolute;

    filter: drop-shadow(2px 2px 10px #151515);
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 3;
  }
`;
const StyledRight = styled.div`
  @media screen and (max-width: 50em) {
    position: absolute;

    filter: drop-shadow(2px 2px 10px #151515);
    width: 40vh;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    overflow-x: hidden;
    z-index: 2;
  }
`;

const OpenLeft = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  font-size: 1.4rem;
  z-index: 5;
  padding: 0.8rem 1.2rem;
  border-radius: 50px;
  background-color: var(--player-backgorund-color);
  @media screen and (min-width: 801px) {
    display: none;
  }
`;
const OpenRight = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  font-size: 1.4rem;
  z-index: 5;
  padding: 0.8rem 1.2rem;
  border-radius: 50px;
  background-color: var(--player-backgorund-color);
  @media screen and (min-width: 801px) {
    display: none;
  }
`;

function Home() {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 800) {
      setLeftOpen((leftOpen) => (leftOpen = true));
      setRightOpen((rightOpen) => (rightOpen = true));
    }
  }, [rightOpen, leftOpen]);

  return (
    <StyledHome>
      <OpenLeft onClick={() => setLeftOpen(!leftOpen)}>
        <Fade delay={500}>{leftOpen ? "Close Search" : "Open Search"}</Fade>
      </OpenLeft>
      <OpenRight onClick={() => setRightOpen(!rightOpen)}>
        <Fade delay={500}>{rightOpen ? "Close Info" : "Open Info"}</Fade>
      </OpenRight>

      <StyledLeft style={leftOpen ? { display: "block" } : { display: "none" }}>
        <Fade direction="left">
          <LeftHome />
        </Fade>
      </StyledLeft>

      <CenterHome />

      <StyledRight
        style={rightOpen ? { display: "block" } : { display: "none" }}
      >
        <Fade direction="right">
          <RightHome />
        </Fade>
      </StyledRight>
    </StyledHome>
  );
}

export default Home;
