import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserActivity from '../../molecules/useractivity';

class Activity extends React.Component {
  render() {
    return (
    	<div>

	  		<div className="sectionTitle">
		     	<div className="col">
		  			<h2>Activity</h2>
				</div>

		     	<div className="col">
		     		<span>View All</span>
					<FontAwesomeIcon icon="arrow-right" />
		     	</div>
			</div>

			<UserActivity />	

	    </div>
    );
  }
}

export default(Activity);
