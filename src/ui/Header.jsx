import { Fade } from "react-awesome-reveal";
import styled from "styled-components";

const StyledHeader = styled.header`
  text-align: center;
  width: 100%;
  height: 5vh;
  display: grid;
  justify-items: center;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <Fade delay={1000} direction="down" triggerOnce>
        <p>Robify</p>
      </Fade>
    </StyledHeader>
  );
}

export default Header;
