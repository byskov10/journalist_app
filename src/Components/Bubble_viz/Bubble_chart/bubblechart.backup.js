import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import _ from 'lodash';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import HighchartsMore from 'highcharts/highcharts-more';
import data_vis from './data.json'

HighchartsExporting(Highcharts);
HighchartsAccessibility(Highcharts);
HighchartsMore(Highcharts);

const getOptions = () => {
  const data = _.cloneDeep(data_vis);
  
  return {
    chart: {
      type:'packedbubble',
      width: 1200,
      height: 700,
      backgroundColor: 'transparent',
      events: {
        load: function() {
          // Add custom CSS to reduce opacity of other bubbles
          const chart = this;
          const container = chart.container;
          const css = `
            .highcharts-point:not(.highcharts-color-0) {
              opacity: 0.2;
            }
            .highcharts-point.highcharts-point-hover:not(.highcharts-color-0),
            .highcharts-point.highcharts-color-0.highcharts-point-select {
              opacity: 1;
            }
          `;
          const style = document.createElement('style');
          style.type = 'text/css';
          style.appendChild(document.createTextNode(css));
          container.appendChild(style);
        },
        redraw: function() {
          // Update custom CSS on chart redraw
          const chart = this;
          const container = chart.container;
          const css = `
            .highcharts-point:not(.highcharts-color-0) {
              opacity: 0.2;
            }
            .highcharts-point.highcharts-point-hover:not(.highcharts-color-0),
            .highcharts-point.highcharts-color-0.highcharts-point-select {
              opacity: 1;
            }
          `;
          const style = container.querySelector('style');
          style.innerHTML = css;
        },
      },
    },
    title: {
      text: _.startCase(""),
    },
    plotOptions: {
      packedbubble: {
        minSize: '30%',
        maxSize: '100%',
        useSimulation: false,
        dataLabels: {
          enabled: true,
          format: '{point.name}',
        },
        enableMouseTracking: true,
        events: {
          click: function (event) {
            const chart = this.chart;
            const point = event.point;
            
            // Deselect all bubbles
            data.forEach(series => {
              series.data.forEach(point => {
                point.selected = false;
              });
            });
            
            // Select the clicked bubble
            point.selected = true;
            
            // Update the chart
            chart.update({
              series: data,
            }, true, false);
          }
        }
      },
    },
    series: data,
    credits: {
      enabled: false,
    },
  };
};

function Bubble() {
  return (
    <HighchartsReact highcharts={Highcharts} options={getOptions()} />
  );
}

export default Bubble;