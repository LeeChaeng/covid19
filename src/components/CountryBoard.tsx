import React, { useMemo } from "react";
import Country from "./Coutry";
import styled from "styled-components";
import useAxios from "../hooks/useAxios";
import { ISO } from "../static/enum";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

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
  const { data } = useAxios<Array<CountriesData>>(
    "https://disease.sh/v3/covid-19/countries?sort=cases"
  );

  const lastUpdated = useMemo(
    () =>
      data?.reduce(
        (prev, current) => (prev < current.updated ? current.updated : prev),
        0
      ),
    [data]
  );

  return (
    <Block>
      <h1>전세계 확진자 수</h1>
      {lastUpdated && (
        <div className="updated">
          마지막 업데이트 :{" "}
          {formatDistanceToNow(lastUpdated, { locale: ko, addSuffix: true })}
        </div>
      )}
      <Wrapper>
        <Title>
          <div>
            <span className="divider"></span>
            <span>국가</span>
            <span className="divider"></span>
          </div>
          <div>
            <span className="divider"></span>
            <span>총 확진자수</span>
            <span className="divider"></span>
          </div>
        </Title>
        <Container>
          {data !== null ? (
            data.map((cur, idx) => (
              <Country
                key={idx}
                name={
                  ISO.find(
                    (iso) =>
                      iso.code === cur["countryInfo"]["iso2"] ||
                      iso.name === cur["country"]
                  )?.korName
                }
                cases={cur["cases"]}
                flag={cur["countryInfo"]["flag"]}
                backgroundColor={(idx + 1) % 2 ? "#efeded" : "white"}
              />
            ))
          ) : (
            <div></div>
          )}
        </Container>
      </Wrapper>
    </Block>
  );
};

const Block = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  & > h1 {
    margin-left: 23px;
    margin-bottom: 10px;
    font-family: "SCDream_bold";
  }
  & > .updated {
    margin-left: 23px;
  }
`;

const Wrapper = styled.div`
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
  padding: 5px 0px;
  & > div {
    width: 100px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & > div > .divider {
    display: inline-block;
    width: 0;
    height: 8px;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }
`;

const Container = styled.div`
  width: 350px;
  height: 240px;
  font-size: 13px;
  overflow-y: scroll;
`;

export default CountryBoard;
