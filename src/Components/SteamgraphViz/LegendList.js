import { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import SteamGraphViz from './SteamGraphViz';

const StreamgraphList = ({ chartId }) => {
  const [legendItems, setLegendItems] = useState([]);

  useEffect(() => {
    const chart = Highcharts.charts[chartId];
    if (chart) {
      setLegendItems(chart.legend.allItems);
    }
  }, [chartId]);

  return (
    <ul>
      {legendItems.map((item) => (
        <li key={item.name}>{item.name}</li>
      ))}
    </ul>
  );
};

export default StreamgraphList;
