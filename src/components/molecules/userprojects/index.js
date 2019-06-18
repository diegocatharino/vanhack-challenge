import React from "react";
import TagEth from '../../atoms/tageth';
import TagBtc from '../../atoms/tagbtc';
import TagDefault from '../../atoms/tagdefault';
import TextTime from '../../atoms/texttime';
import NumberDefault from '../../atoms/numberdefault';
import ThumbAvatar from '../../atoms/thumbavatar';
import TextAvatar from '../../atoms/textavatar';
import TextBigger from '../../atoms/textbigger';
// Import Style
import { BlockDefault } from './styled';
import myImg from '../../../static/images/thumbavatar-default.png';

class UserProjects extends React.Component {
  render() {
    return (
    	<BlockDefault className="blockDefault">

	      	<div className="row">
				<div className="col-xs-10">
					<ThumbAvatar src={myImg} />
					<div className="name">
						<TextAvatar text="Alice Martin" />
						<TextTime text="5 hours ago" />
					</div>
				</div>
				<div className="col-xs-2 tag">
					<TagDefault text="ruby" />
				</div>
	     	</div>

	      	<div className="row bottomBorder">
	      		<TextBigger text="Design and develop a website for an educational platform focusing on the growth of children." />  	
	     	</div>

	      	<div className="row">
		     	<div className="col-xs-10">
		     		<TagEth text="1.2 ETH" />
		     		<TagBtc text="0.3 BTC" />
		     	</div>  
		     	<div className="col-xs-2 number">
		     		<NumberDefault text="$760" />
		     	</div>  
	    	</div>	     

	    </BlockDefault>
    );
  }
}

export default(UserProjects);
