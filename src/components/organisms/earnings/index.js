import React from "react";
import Chart from '../../molecules/chart/chart';
import tagEth from '../../atoms/tagEth';
import tagBtc from '../../atoms/tagBtc';

class Earnings extends React.Component {
  render() {
    return (
  		<div className="blockDefault">

	      	<div className="row">
	  			<h5>Earnings</h5>
		    	<div className="chartContent">
		    		<Chart />
		    	</div>	  
	    	</div>

	      	<div className="row">
		     	<div className="col">
		     		<span className="totalMoney">$2878.90</span>
		     		<span className="compTxt">
		     			<strong>+42</strong> since last week
		     		</span>
		     	</div>
		     	<div className="col">
		     		<tagEth />
		     		<tagBtc />
		     	</div>
	     	</div>

	    </div>
    );
  }
}

export default(Earnings);
