import React from "react";
import styled from "styled-components";
import Status from "./components/Status";
import BarChart from "./components/BarChart";
import LineChart from "./components/LineChart";
import CountryBoard from "./components/CountryBoard";
import Modal from "./components/Modal";
import { useState } from "react";
import ModalPortal from "./ModalPortal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <Status handleModal={setIsModalOpen} />
      <BarChart />
      <LineChart />
      <CountryBoard />
      {isModalOpen && (
        <ModalPortal>
          <Modal handleModal={setIsModalOpen} />
        </ModalPortal>
      )}
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 400px;
  margin: 0 auto;
  background-color: white;
`;
