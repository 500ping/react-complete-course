import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => {
    return dataPoint.value;
  });
  // const totalMaxium = Math.max(...dataPointValues);
  const totalMaxium = dataPointValues.reduce((a, b) => a + b, 0);

  const chartBarComponents = props.dataPoints.map((dataPoint) => {
    return (
      <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMaxium}
        label={dataPoint.label}
      />
    );
  });

  return <div className="chart">{chartBarComponents}</div>;
};

export default Chart;
