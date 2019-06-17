import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Slack extends React.Component {
  render() {
    return (
  		<div className="blockSlack">

	      	<div className="row">
  				<FontAwesomeIcon icon="code" />
			</div>

	      	<div className="row">
  				<h5>Join the conversation on Slack</h5>
  				<p>
					Stay up to date on the latest news and special programs that only take place within the slack channel.
  				</p>
			</div>

			<div className="row">
		     	<div className="col">
	  				<span className="btnCta" >Remind later</span>
		     	</div>
		     	<div className="col">
	  				<a className="btnCta active" href="#">Join now</a>
		     	</div>		     	
	     	</div>	     	

	    </div>
    );
  }
}

export default(Slack);
