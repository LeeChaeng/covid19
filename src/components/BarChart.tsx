import React, { Component } from "react";
import Chart from "react-apexcharts";
import styled from "styled-components";

import axios from "axios";

class BarChart extends Component {
  state = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [],
      },
    },
    series: [
      {
        name: "확진자수",
        data: [],
      },
    ],
  };

  getData = async () => {
    const res = await axios.get(
      "https://disease.sh/v3/covid-19/historical/KR?lastdays=8"
    );

    let key = [];
    let value = [];
    let temp_value = [];

    for (let i in res.data.timeline.cases) {
      //   console.log(i + " : " + res.data.timeline.cases[i]);
      key.push(i.substring(0, i.length - 3));
      temp_value.push(res.data.timeline.cases[i]);
    }

    key.splice(0, 1);
    for (let i = 0; i < temp_value.length; i++) {
      if (i === 0) {
        continue;
      }
      value.push(temp_value[i] - temp_value[i - 1]);
    }

    this.setState({
      options: {
        xaxis: {
          categories: key,
        },
      },
      series: [
        {
          data: value,
        },
      ],
    });
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <ChartBlock>
        <h1>막대 일별 확진자 그래프</h1>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="400px"
        />
      </ChartBlock>
    );
  }
}

const ChartBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default BarChart;
