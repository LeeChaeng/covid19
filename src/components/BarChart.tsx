import React, { useMemo } from "react";
import styled from "styled-components";
import useAxios from "../hooks/useAxios";
import Chart from "react-apexcharts";
import { numberWithComma } from "../utils/numberWithComma";

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

export default function BarChart() {
  const { data } = useAxios<HistoricalData>(
    "https://disease.sh/v3/covid-19/historical/KR?lastdays=8"
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

    key.splice(0, 1);
    for (let i = 1; i < temp_value.length; i++) {
      value.push(temp_value[i] - temp_value[i - 1]);
    }

    return { key, value };
  }, [data]);

  return (
    <ChartWrapper>
      <h1>막대 일별 확진자 그래프</h1>
      <Chart
        options={{
          chart: {
            id: "basic-bar",
          },
          xaxis: {
            categories: key,
          },
          grid: {
            row: {
              colors: ["#fff", "#f2f2f2"],
            },
            borderColor: "#transparent",
          },
          fill: {
            colors: ["#265e9077"],
            type: "gradient",
            gradient: {
              shade: "dark",
              type: "vertical",
              shadeIntensity: 1,
              gradientToColors: ["#6b266abb"], // optional, if not defined - uses the shades of same color in series
              opacityFrom: 1,
              opacityTo: 1,
              stops: [0, 100],
              colorStops: [],
            },
          },
          plotOptions: {
            bar: {
              dataLabels: {
                position: "top", // top, center, bottom
              },
            },
          },
          dataLabels: {
            enabled: true,
            formatter: function (val: number) {
              return numberWithComma(val);
            },
            offsetY: -20,
            style: {
              fontSize: "12px",
              colors: ["#304758"],
            },
          },
          yaxis: {
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
            },
          },
        }}
        series={[
          {
            name: "확진자수",
            data: value,
          },
        ]}
        type="bar"
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
