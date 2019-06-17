import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserRankings from '../../molecules/userrankings';

class TopEarners extends React.Component {
  render() {
    return (
  		<div>

	  		<div className="sectionTitle">
		     	<div className="col">
		  			<h2>Top Earners</h2>
				</div>

		     	<div className="col">
		     		<span>View All</span>
					<FontAwesomeIcon icon="arrow-right" />
		     	</div>
			</div>

			<UserRankings />	  	

	    </div>
    );
  }
}

export default(TopEarners);
