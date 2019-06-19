import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BlockSlack } from './styled';

class Slack extends React.Component {
	 constructor(props) {
	    super(props);

	    this.state = {
	        showComponent: true,
	        fade: false
	    };

    	this.destroyComponent = this.destroyComponent.bind(this);
	}
	destroyComponent() {

        this.setState({ fade: true }),
  		setTimeout(() => this.setState({ showComponent: false }), 300)
	}

  	render() {
	    return  this.state.showComponent && 
  		<BlockSlack className={this.state.fade ? "fade" : ""} clickedButton={this.close}>

	      	<div className="row">
	      	    <FontAwesomeIcon className="icon" icon={['fab', 'slack-hash']} />
			</div>

	      	<div className="row">
  				<h5>Join the conversation on Slack</h5>
  				<p>
					Stay up to date on the latest news and special programs that only take place within the slack channel.
  				</p>
			</div>

			<div className="row">
		     	<div className="col">
	  				<span className="btnCta" onClick={this.destroyComponent}>Remind later</span>
		     	</div>
		     	<div className="col">
	  				<a className="btnCta active" href="https://vanhackathon.slack.com" target="_blank" title="Join now">Join now</a>
		     	</div>		     	
	     	</div>	     	

	    </BlockSlack>

  	}
}

export default(Slack);
