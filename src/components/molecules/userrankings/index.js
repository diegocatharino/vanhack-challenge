import React from "react";
import TagEth from '../../atoms/tageth';
import TagBtc from '../../atoms/tagbtc';
import ThumbAvatar from '../../atoms/thumbavatar';

class UserRankings extends React.Component {
  render() {
    return (
  		<div className="blockDefault">

	      	<div className="row">
				<div className="col">
	      			<h5>Recent</h5>
	      		</div>
	      		<div className="col">
	      			<span>This month</span>
	      			<span className="active">All time</span>
	      		</div>
      		</div>

	      	<div className="row bottomBorder">
				<div className="col">
					<span className="order">1.</span>
				</div>
				<div className="col">
					<ThumbAvatar />
					<div className="name">
						<span>Alice Martin</span>
						<span className="num">$760</span>
					</div>
				</div>
	     	</div>	     

	    </div>
    );
  }
}

export default(UserRankings);
