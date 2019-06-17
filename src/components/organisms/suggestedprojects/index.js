import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserProjects from '../../molecules/userprojects';

class Ranking extends React.Component {
  render() {
    return (
    	<div>

	  		<div className="sectionTitle">
		     	<div className="col">
		  			<h2>Suggested Projects</h2>
				</div>

		     	<div className="col">
		     		<span>View All</span>
					<FontAwesomeIcon icon="arrow-right" />
		     	</div>
			</div>

			<UserProjects />	

	    </div>
    );
  }
}

export default(Ranking);
