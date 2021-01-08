import React from "react";
import styled from "styled-components";
import Card from "./Card";

import useAxios from "../hooks/useAxios";

import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

type ContriesData = {
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
  const { data, loading, error } = useAxios<ContriesData>(
    "https://disease.sh/v3/covid-19/countries/KR"
  );

  const getData = async () => {
    let dd = await axios.get(
      "/korea/country/new/?serviceKey=73c2feb522af20d648a4438e7012568ca"
    );
    console.log(dd.data);
  };

  getData();

  return (
    <>
      <FontAwesomeIcon icon={faHome} />
      <span>Covid 19</span>
      <FontAwesomeIcon icon={faBars} />
      <h1>투데이 코로나</h1>
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
    </>
  );
};

export default Status;

const Block = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
`;
