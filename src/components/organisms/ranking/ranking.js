import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Ranking extends React.Component {
  render() {
    return (
  		<div className="blockDefault">

	      	<div className="row bottomBorder">
		     	<div className="col">
	  				<h5>Rank</h5>
	  				<span className="icon">
	  					<FontAwesomeIcon icon="star" />
		     		</span>
		     		<span className="numWithIcon">607</span>
		     		<span className="compTxt">
		     			You're in top <strong>40</strong>
		     		</span>
		     	</div>
		     	<div className="col">
	  				<h5>Projects</h5>
	  				<span className="icon">
		  				<FontAwesomeIcon icon="chevron-left" />
		  				<FontAwesomeIcon icon="chevron-right" />
	  				</span>
		     		<span className="numWithIcon">45</span>
		     		<span className="compTxt">
		     			<strong>10</strong> in this month
		     		</span>
		     	</div>
	     	</div>

	      	<div className="row">
	  			<h5>Top Categories</h5>
		    	<ul className="topCategories">
		    		<li>ruby</li>
		    		<li>clojure</li>
		    		<li>java</li>
		    	</ul>	  
	    	</div>	     	

	    </div>
    );
  }
}

export default(Ranking);
