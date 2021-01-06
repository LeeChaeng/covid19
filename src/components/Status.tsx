import React from "react";
import styled from "styled-components";
import Card from "./Card";
import axios from "axios";
import useAxios from "../hooks/useAxios";

import { faHome, faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
  console.log(data);

  const getData = async () => {
    const temp = await axios.get(
      "http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=uyCZ53eE%2B7NdfTQ%2FJGP%2FWTGdP9cWxaiWPA7BOQrjdlA9gedNSKI%2FeBkHPJ%2BK5y0yLbHXLYXAVKBTdU8aqz5AGQ%3D%3D&pageNo=1&numOfRows=10&startCreateDt=20201231&endCreateDt=20210101"
    );
    console.log(temp);
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
      <Block>막대 일별 확진자 그래프</Block>
      <Block>꺾은선 누적 확진자수 그래프</Block>
      <Block>지역별 차트(?) 표</Block>
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
