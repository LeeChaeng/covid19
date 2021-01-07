import React from "react";
import Chart from "react-apexcharts";
import axios from "axios";
import styled from "styled-components";

class LineChart extends React.Component {
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
      "https://disease.sh/v3/covid-19/historical/KR?lastdays=all"
    );

    let key = [];
    let value = [];
    let temp_value = [];

    for (let i in res.data.timeline.cases) {
      //   console.log(i + " : " + res.data.timeline.cases[i]);
      key.push(i.substring(0, i.length - 3));
      temp_value.push(res.data.timeline.cases[i]);
    }

    for (let i = 0; i < temp_value.length; i++) {
      value.push(temp_value[i]);
    }

    this.setState({
      options: {
        xaxis: {
          categories: key,
          labels: {
            show: true,
            rotate: 10,
            rotateAlways: false,
            hideOverlappingLabels: true,
            minHeight: 10,
          },
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
          type="line"
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

export default LineChart;
