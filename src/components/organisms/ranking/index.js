import React from "react";
import LazyLoad from 'react-lazy-load';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TitleH5 from '../../atoms/titleh5';
import IconBracket from '../../atoms/iconbracket';
import IconStar from '../../atoms/iconstar';
import NumberBigger from '../../atoms/numberbigger';
import TextComp from '../../atoms/textcomp';
import TagDefault from '../../atoms/tagdefault';
import { BlockDefault } from './styled';

class Ranking extends React.Component {
  render() {
    return (
  		<BlockDefault className="blockDefault col-md-4">
  		
	  		<div className="blockContainer">
		      	<div className="row bottomBorder">
			     	<div className="col-xs-7 col-md-7 no-gutter">
		  				<TitleH5 text="Rank" />
						<LazyLoad height={32} width={32}>
		  					<IconStar />
					  	</LazyLoad>
		  				<NumberBigger text="607" />

			     		<TextComp>You're in top <strong>40%</strong></TextComp>
			     	</div>
			     	<div className="col-xs-5 col-md-5 no-gutter">
		  				<TitleH5 text="Projects" />
						<LazyLoad height={32} width={32}>
		  					<IconBracket />
					  	</LazyLoad>
		  				<NumberBigger text="45" />
			     		<TextComp><strong>10</strong> in this month</TextComp>
			     	</div>
		     	</div>

		      	<div className="row no-margin-bottom">
		  			<TitleH5 text="Top Categories" />
			    	<ul className="topCategories">
			    		<li><TagDefault text="ruby" /></li>
			    		<li><TagDefault text="clojure" /></li>
			    		<li><TagDefault text="java" /></li>
			    	</ul>	  
		    	</div>	  	  
	    	</div>	   	

	    </BlockDefault>
    );
  }
}

export default(Ranking);
