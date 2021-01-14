import React from "react";
import styled from "styled-components";

import { numberWithComma } from "../utils/numberWithComma";

type CountryProps = {
  name: string | undefined;
  cases: number;
  flag: string;
  backgroundColor: string;
};

const Country = ({ name, cases, flag, backgroundColor }: CountryProps) => {
  return (
    <Block backgroundColor={backgroundColor}>
      <div className="country">
        <span>
          <Img src={flag} alt={name} />
        </span>
        <span>{name}</span>
      </div>
      <div className="number">{numberWithComma(cases)}</div>
    </Block>
  );
};

const Block = styled.div<{ backgroundColor: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  & > .country {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > .number {
    margin-right: 10px;
  }
`;

const Img = styled.img`
  width: 25px;
  margin: 3px 10px;
`;

export default Country;
