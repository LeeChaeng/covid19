import React from "react";
import styled from "styled-components";

type CountryProps = {
  name: string | undefined;
  cases: number;
  flag: string;
};

const Country = ({ name, cases, flag }: CountryProps) => {
  return (
    <Block>
      <div>
        <Img src={flag} alt={name} />
        {name}
      </div>
      <div>{cases}</div>
    </Block>
  );
};

const Block = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 10%;
`;

export default Country;
