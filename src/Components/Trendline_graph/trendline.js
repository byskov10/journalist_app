import HighchartsReact from "highcharts-react-official"
import Highcharts from "highcharts"

const options = () => {
    credits: {
        enabled: false
    }
    series: [{
        data: [
            [0, 1],
            [1, 2],
            [2, 3],
            [3, 5],
            [4, 8],
            [5, 13],
            [6, 21],
            [7, 34],
            [8, 55],
            [9, 89]
        ]
    }]
}

const Linechart = () => {
  return <HighchartsReact 
    highcharts={Highcharts} 
    options={options()} 
  />
}

export default Linechart;