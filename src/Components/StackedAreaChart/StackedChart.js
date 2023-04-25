import React from "react";
import StackedAreaChart from "./StackedAreaChart";

function StackedChart() {
  const data = [
    {x: 1, y: 2, z: 3},
    {x: 2, y: 3, z: 1},
    {x: 3, y: 1, z: 2},
    {x: 4, y: 2, z: 1},
    {x: 5, y: 3, z: 2}
  ];

  return (
    <div>
      <StackedAreaChart 
        data={data}
        width={600}
        height={400}
        marginLeft={60}
        marginBottom={40}
        xLabel="X Axis"
        yLabel="Y Axis"
        xGrid={true}
        yGrid={true}
        fill={["red", "green"]}
      />
    </div>
  );
}

export default StackedChart;
