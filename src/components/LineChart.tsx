import React, { useMemo } from "react";
import Chart from "react-apexcharts";
import { numberWithComma } from "../utils/numberWithComma";
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
      <h1>총 확진자수 증가 그래프</h1>
      <Chart
        options={{
          chart: {
            id: "basic-bar",
            toolbar: {
              show: false,
            },
          },
          colors: ["#884884"],
          xaxis: {
            categories: key,
            hideOverlappingLabels: true,
            axisBorder: {
              show: false,
            },
            axisTicks: {
              show: false,
            },
            labels: {
              rotate: 0,
              rotateAlways: false,
              trim: true,
            },
            tooltip: {
              enabled: false,
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
            tickAmount: 6,
          },
          grid: {
            row: {
              colors: ["#f2f2f2", "#fff"],
            },
            borderColor: "#transparent",
          },
          markers: {
            colors: "#650d5f",
            strokeWidth: 2.5,
            hover: {
              size: 7,
            },
          },
          tooltip: {
            custom: ({
              dataPointIndex,
              series,
              seriesIndex,
            }: {
              dataPointIndex: number;
              series: number[][];
              seriesIndex: number;
            }) => {
              const [month, day] = key[dataPointIndex].split("/");
              const value = series[seriesIndex][dataPointIndex];
              return `<div class="tooltip">
                  <div class="tooltip__date">${month}월 ${day}일</div>
                  <div class="tooltip__cases">
                    <span class="tooltip__cases__title">확진자 수</span>
                    <span class="tooltip__cases__value">${numberWithComma(
                      value
                    )}명<span>
                  </div>
                </div>`;
            },
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
  & > h1 {
    margin-left: 23px;
    margin-bottom: 0px;
    font-family: "SCDream_bold";
  }
`;
