import React, { Dispatch } from "react";
import styled from "styled-components";
import Card from "./Card";

import useAxios from "../hooks/useAxios";
import Header from "./Header";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

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

const calIncrese = (
  value: number | undefined,
  preValue: number | undefined
) => {
  if (!(value && preValue)) {
    return "-";
  } else {
    if (value > preValue) {
      return "▲";
    } else if (value < preValue) {
      return "▼";
    } else return "-";
  }
};

interface ModalProps {
  handleModal: Dispatch<React.SetStateAction<boolean>>;
}

const Status = ({ handleModal }: ModalProps) => {
  const { data } = useAxios<KoreaData>(
    "https://disease.sh/v3/covid-19/countries/KR"
  );

  const { data: yData } = useAxios<KoreaData>(
    "https://disease.sh/v3/covid-19/countries/KR?yesterday=true&strict=true"
  );

  return (
    <Container>
      <Header handleModal={handleModal} />
      {data && (
        <div>
          마지막 업데이트 :{" "}
          {formatDistanceToNow(data.updated, { locale: ko, addSuffix: true })}
        </div>
      )}

      <Block>
        <Card
          title="확진자"
          total={data?.cases}
          today={data?.todayCases}
          color={"rgb(122,30,114)"}
          updown={calIncrese(data?.todayCases, yData?.todayCases)}
        />
        <Card
          title="완치자"
          total={data?.recovered}
          today={data?.todayRecovered}
          color={"rgb(0,94,148)"}
          updown={calIncrese(data?.todayRecovered, yData?.todayRecovered)}
        />
        <Card
          title="사망자"
          total={data?.deaths}
          today={data?.todayDeaths}
          color={"rgb(102,102,102)"}
          updown={calIncrese(data?.todayDeaths, yData?.todayDeaths)}
        />
      </Block>
    </Container>
  );
};

const Container = styled.div`
  padding: 30px;
  padding-bottom: 20px;
`;

const Block = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 30px 0px;
`;

export default Status;
export type { ModalProps };
