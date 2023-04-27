import React from "react";
import { Legend } from "highcharts-react-official";

const ChartLegend = ({ options }) => {
  return <Legend {...options.legend} />;
};

export default ChartLegend;
