import React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";
import spinner from '../../../static/images/spinner.gif';
import { ChartContent } from './styled';

const chartEvents = [
  {
    eventName: "select",
    callback({ chartWrapper }) {
      console.log("Selected ", chartWrapper.getChart().getSelection());
    }
  }
];

const data = [
  ["", ""],
  ["Mar", 170],
  ["", 220],
  ["May", 180],
  ["", 200],
  ["Jul", 100],
  ["", 230],
  ["Sep", 170],
  ["", 190],
  ["Nov", 230],
  ["", 220],
  ["Jan", 250]
];
 
const options = {
  title: "Months vs. Earnings",
  hAxis: { 
    title: "Earnings"
  },
  vAxis: { 
    title: "Months"
  },
  legend: "none",
  chartArea: {width: '85%', height: '70%', top: 10, right: 5},
  titlePosition: 'none', axisTitlesPosition: 'out',
  hAxis: {textPosition: 'out', gridlines: {color: '#333', count: 6}}, 
  vAxis: {textPosition: 'out', format: '$#'}
};

class earningChart extends React.Component {
  render() {
    return (
      <ChartContent>
    		<Chart
    	      chartType="LineChart"
    	      data={data}
    	      options={options}
    	      graphID="LineChart"
    	      width="100%"
    	      height="180px"
    	      chartEvents={chartEvents}
            loader={<div className="spinner"><img src={spinner} /></div>}
        	/>
      </ChartContent>
    );
  }
}

export default(earningChart);
