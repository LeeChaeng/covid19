import React from "react";
import styled from "styled-components";
import Status from "./components/Status";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";

function App() {
  return (
    <Container>
      <Status />
      <BarChart />
      <LineChart />
      지역별 차트(?) 표
    </Container>
  );
}

export default App;

const Container = styled.div`
  height: 100vh;
  width: 400px;
  margin: 0 auto;
  background-color: white;
`;
