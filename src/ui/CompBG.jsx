import styled from "styled-components";

const CompBG = styled.div`
  background-color: var(--component-background-color);
  padding: 3.2rem;
  border-radius: 10px;
  overflow-y: auto;
  height: 80vh;
  @media screen and (max-width: 50em) {
    padding: 1.8rem;
  }
`;

export default CompBG;
