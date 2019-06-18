import React from "react";
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
  		<BlockDefault className="blockDefault">

	      	<div className="row bottomBorder">
		     	<div className="col-xs-6">
	  				<TitleH5 text="Rank" />
	  				<IconStar />
	  				<NumberBigger text="607" />
	  				<TextComp text="You're in top <strong>40</strong>" />
		     	</div>
		     	<div className="col-xs-6">
	  				<TitleH5 text="Projects" />
	  				<IconBracket />
	  				<NumberBigger text="45" />
	  				<TextComp text="<strong>10</strong> in this month" />
		     	</div>
	     	</div>

	      	<div className="row">
	  			<TitleH5 text="Top Categories" />
		    	<ul className="topCategories">
		    		<li><TagDefault text="ruby" /></li>
		    		<li><TagDefault text="clojure" /></li>
		    		<li><TagDefault text="java" /></li>
		    	</ul>	  
	    	</div>	     	

	    </BlockDefault>
    );
  }
}

export default(Ranking);
