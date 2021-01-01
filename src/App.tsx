import React from "react";
import styled from "styled-components";
import Status from "./components/Status";

function App() {
  return (
    <Container>
      <Status />
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  width: 400px;
  margin: 0 auto;
  background-color: beige;
`;
