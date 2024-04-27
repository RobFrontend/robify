import styled from "styled-components";

const NotFound = styled.div`
  background-color: var(--body-background-color);
  height: 100vh;
`;

function PageNotFound() {
  return (
    <NotFound>
      <h1>Page not Found</h1>
    </NotFound>
  );
}

export default PageNotFound;
