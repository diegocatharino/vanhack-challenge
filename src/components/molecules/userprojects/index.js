import React from "react";
import TagEth from '../../atoms/tageth';
import TagBtc from '../../atoms/tagbtc';
import ThumbAvatar from '../../atoms/thumbavatar';

class UserProjects extends React.Component {
  render() {
    return (
  		<div className="blockDefault">

	      	<div className="row">
				<div className="col">
					<ThumbAvatar />
					<div className="name">
						<span>Alice Martin</span>
						<span className="date">5 hours ago</span>
					</div>
				</div>
	     	</div>

	      	<div className="row bottomBorder">
		     	Design and develop a website for an educational platform focusing on the growth of children.
	     	</div>

	      	<div className="row">
		     	<div className="col">
		     		<TagEth />
		     		<TagBtc />
		     	</div>  
		     	<div className="col">
		     		<span className="num">$760</span>
		     	</div>  
	    	</div>	     

	    </div>
    );
  }
}

export default(UserProjects);
