import React from "react";
import styled from "styled-components";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div>
      <Info>
        <Block>
          <span>위기경보</span> <Point>심각</Point>
        </Block>
        <FontAwesomeIcon icon={faBars} />
      </Info>
      <TitleBox>
        <Title>투데이 코로나</Title>
        <SubTitle>Today Corona</SubTitle>
      </TitleBox>
    </div>
  );
};

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  align-items: center;
`;

const Point = styled.div`
  background-color: #8f4c8b;
  border-radius: 10px;
  padding: 0px 5px;
  color: #fff;
`;

const Block = styled.div`
  display: flex;
  width: 25%;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 0;
  padding: 0;
`;

const TitleBox = styled.div`
  margin-top: 3px;
  display: flex;
  align-items: flex-end;
`;

const SubTitle = styled.div`
  font-size: 10px;
`;
export default Header;
