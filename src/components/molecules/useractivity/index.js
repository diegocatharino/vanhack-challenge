import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TagEth from '../../atoms/tageth';
import TagBtc from '../../atoms/tagbtc';
import ThumbAvatar from '../../atoms/thumbavatar';

class UserActivity extends React.Component {
  render() {
    return (
  		<div className="blockDefault">

	      	<div className="row">
	      		<h5>Recent</h5>
      		</div>

			<div className="row">      		
				<div className="col">
					<FontAwesomeIcon icon="code" />
					<ThumbAvatar />
				</div>
				<div className="col infos">
					<div className="name">
						<span>Alice Martin</span>
						<span className="date">5 hours ago</span>
					</div>
			      	<div className="infoTxt">
				     	Received $780 for a Ruby project.
			     	</div>					
		     		<TagEth />
		     		<span className="num">$760</span>
				</div>
	     	</div>

	    </div>
    );
  }
}

export default(UserActivity);
