import React, { useMemo } from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import styled from "styled-components";
import useAxios from "../hooks/useAxios";

type HistoricalData = {
  country: string;
  province: string[];
  timeline: {
    cases: {
      [key: string]: number;
    };
    deaths: {
      [key: string]: number;
    };
    recovered: {
      [key: string]: number;
    };
  };
};

export default function LineChart() {
  const { data } = useAxios<HistoricalData>(
    "https://disease.sh/v3/covid-19/historical/KR?lastdays=all"
  );

  const { key, value } = useMemo<{ key: string[]; value: number[] }>(() => {
    const key: string[] = [];
    const value: number[] = [];
    const temp_value: number[] = [];
    if (!data) {
      return { key, value };
    }

    for (let i in data.timeline.cases) {
      key.push(i.substring(0, i.length - 3));
      temp_value.push(data.timeline.cases[i]);
    }

    for (let i = 0; i < temp_value.length; i++) {
      value.push(temp_value[i]);
    }
    return { key, value };
  }, [data]);

  return (
    <ChartWrapper>
      <h1>꺾은선 총 확진자수 증가 추이</h1>
      <Chart
        options={{
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: key,
          },
        }}
        series={[
          {
            name: "확진자수",
            data: value,
          },
        ]}
        type="line"
        width="400px"
      />
    </ChartWrapper>
  );
}

const ChartWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
