
import * as Plot from "@observablehq/plot";
import { useRef, useEffect, useState } from "react";
import { data } from "./StackedChartData";


function MyPlot({ data }) {
  const ref = useRef();
  const [sort, setSort] = useState("Alphabetical");

  useEffect(() => {
    const barChart = Plot.plot({
      marks: [
        Plot.ruleY([1 / 26], { stroke: "orange", strokeWidth: 3 }),
        Plot.barY(data, {
          x: "letter",
          y: "frequency",
          sort:
            sort === "Alphabetical"
              ? null
              : { x: "y", reverse: sort.startsWith("Desc") }
        }),
        Plot.ruleY([0])
      ],
      y: {
        grid: true
      },
      marginLeft: 50,
      marginTop: 50,
      marginBottom: 50
    });
    ref.current.append(barChart);
    return () => barChart.remove();
  }, [data, sort]);

  return (
    <div>

      <div ref={ref}></div>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <MyPlot data={data} />
    </div>
  );
}
