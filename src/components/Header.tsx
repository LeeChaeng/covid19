import React from "react";
import styled from "styled-components";

import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div>
      <Info>
        <Block>
          <span>위기경보</span> <Point>심각</Point>
        </Block>
        <FontAwesomeIcon icon={faInfo} />
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

const Block = styled.div`
  display: flex;
  width: 28%;
  justify-content: space-between;
  align-items: center;
  & > .span {
    font-size: 12px;
  }
`;

const Point = styled.span`
  background-color: #8f4c8b;
  border-radius: 10px;
  padding: 1px 6.5px;
  color: #fff;
  font-size: 13px;
  height: 14px;
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 0;
  padding: 0;
  font-family: "SCDream_bold";
`;

const TitleBox = styled.div`
  margin-top: 5px;
  display: flex;
  align-items: flex-end;
`;

const SubTitle = styled.div`
  font-size: 10px;
  margin-left: 10px;
  height: 15px;
`;
export default Header;
