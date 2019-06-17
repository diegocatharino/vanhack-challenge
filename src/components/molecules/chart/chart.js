import React from "react";
import { render } from "react-dom";
import { Chart } from "react-google-charts";

const chartEvents = [
  {
    eventName: "select",
    callback({ chartWrapper }) {
      console.log("Selected ", chartWrapper.getChart().getSelection());
    }
  }
];

const data = [
  ["months", "earnings"],
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
  hAxis: { title: "Earnings", viewWindow: { min: 0, max: 15 } },
  vAxis: { title: "Months", viewWindow: { min: 0, max: 15 } },
  legend: "none"
};

class earningChart extends React.Component {
  render() {
    return (
		<Chart
	      chartType="Line"
	      data={data}
	      options={options}
	      graphID="Line"
	      width="100%"
	      height="400px"
	      chartEvents={chartEvents}
    	/>
    );
  }
}

export default(earningChart);
