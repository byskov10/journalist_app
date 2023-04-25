import React from "react";
import * as Plot from "@observablehq/plot";

function StackedAreaChart(props) {
  const {data, width, height, marginLeft, marginBottom, xLabel, yLabel, xGrid, yGrid, fill} = props;

  const chart = Plot.plot({
    width,
    height,
    marginLeft,
    marginBottom,
    x: {
      axis: "bottom",
      label: xLabel,
      grid: xGrid
    },
    y: {
      axis: "left",
      label: yLabel,
      grid: yGrid
    },
    marks: [
      Plot.areaY(data, {x: "x", y1: "y", y2: "z", fill})
    ]
  });

  return <div>{chart}</div>;
}

export default StackedAreaChart;
