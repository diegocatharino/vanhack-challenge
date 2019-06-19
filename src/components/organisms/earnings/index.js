import React from "react";
import Chart from '../../molecules/chart/chart';
import TagEth from '../../atoms/tageth';
import TagBtc from '../../atoms/tagbtc';
import TitleH5 from '../../atoms/titleh5';
import NumberBigger from '../../atoms/numberbigger';
import TextComp from '../../atoms/textcomp';
import { BlockDefault } from './styled';

class Earnings extends React.Component {
  render() {
    return (
    	<BlockDefault className="blockDefault col-md-8">
    	
			<div className="blockContainer">
		      	<div className="row">
					<TitleH5 text="Earnings" />
			    	<div className="chartContent">
			    		<Chart />
			    	</div>	  
		    	</div>

		      	<div className="row">
			     	<div className="col-xs-6 numbers">
			     		<NumberBigger text="$2878.90" />
			     		<TextComp> <strong>+42</strong> since last week </TextComp>
			     	</div>
			     	<div className="col-xs-6 tags">
			     		<TagEth text="0.9087 ETH" />
			     		<TagBtc text="0.5 BTC" />
			     	</div>
		     	</div>
	     	</div>

	    </BlockDefault>
    );
  }
}

export default(Earnings);
