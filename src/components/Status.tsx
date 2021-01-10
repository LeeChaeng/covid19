import React from "react";
import styled from "styled-components";
import Card from "./Card";

import useAxios from "../hooks/useAxios";
import Header from "./Header";

type KoreaData = {
  updated: number;
  country: string;
  countryInfo: {
    _id: number;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    flag: string;
  };
  cases: number;
  todayCases: number;
  deaths: number;
  todayDeaths: number;
  recovered: number;
  todayRecovered: number;
  active: number;
  critical: number;
  casesPerOneMillion: number;
  deathsPerOneMillion: number;
  tests: number;
  testsPerOneMillion: number;
  population: number;
  continent: number;
  oneCasePerPeople: number;
  oneDeathPerPeople: number;
  oneTestPerPeople: number;
  activePerOneMillion: number;
  recoveredPerOneMillion: number;
  criticalPerOneMillion: number;
};

const Status = () => {
  const { data, loading, error } = useAxios<KoreaData>(
    "https://disease.sh/v3/covid-19/countries/KR"
  );

  return (
    <Container>
      <Header />
      <Block>
        <Card
          title="확진자"
          total={data?.cases}
          today={data?.todayCases}
          color={"#e52c0c"}
        />
        <Card
          title="완치자"
          total={data?.recovered}
          today={data?.todayRecovered}
          color={"#3567e0"}
        />
        <Card
          title="사망자"
          total={data?.deaths}
          today={data?.todayDeaths}
          color={"black"}
        />
      </Block>
    </Container>
  );
};

export default Status;

const Container = styled.div`
  padding: 30px;
  padding-bottom: 0px;
`;
const Block = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 30px 0px;
`;
