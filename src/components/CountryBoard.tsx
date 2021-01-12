import React from "react";
import Country from "./Coutry";
import styled from "styled-components";
import useAxios from "../hooks/useAxios";
import { ISO } from "../static/enum";

type CountriesData = {
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

const CountryBoard = () => {
  const { data, loading, error } = useAxios<Array<CountriesData>>(
    "https://disease.sh/v3/covid-19/countries?sort=cases"
  );

  return (
    <Block>
      <h1>전세계 확진자 수</h1>
      <Title>
        <div>나라</div>
        <div>총 확진자수</div>
      </Title>
      <Container>
        {data !== null ? (
          data.map((cur) => (
            <Country
              name={
                ISO.find(
                  (iso) =>
                    iso.code === cur["countryInfo"]["iso2"] ||
                    iso.name === cur["country"]
                )?.korName
              }
              cases={cur["cases"]}
              flag={cur["countryInfo"]["flag"]}
            />
          ))
        ) : (
          <div></div>
        )}
      </Container>
    </Block>
  );
};

const Block = styled.div`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 350px;
  font-size: 13px;
`;

const Container = styled.div`
  width: 350px;
  height: 120px;
  font-size: 13px;
  border: solid black 1px;
  overflow-y: scroll;
`;

export default CountryBoard;
