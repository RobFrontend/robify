import styled from "styled-components";

const StyledHeader = styled.header`
  text-align: center;
  width: 100%;
  height: 5vh;
`;

function Header() {
  return (
    <StyledHeader>
      <p>Robify</p>
    </StyledHeader>
  );
}

export default Header;
