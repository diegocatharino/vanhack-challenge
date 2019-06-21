import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TagEth from '../../atoms/tageth';
import TagBtc from '../../atoms/tagbtc';
import IconCode from '../../atoms/iconcode';
import IconDollar from '../../atoms/icondollar';
import TextTime from '../../atoms/texttime';
import TitleH5 from '../../atoms/titleh5';
import ThumbAvatar from '../../atoms/thumbavatar';
import TextAvatar from '../../atoms/textavatar';
import TextDefault from '../../atoms/textdefault';
import NumberDefault from '../../atoms/numberdefault';
// Import Style
import { BlockDefault } from './styled';
import myImg from '../../../static/images/thumbavatar-default.png';

class UserActivity extends React.Component {
  render() {
    return (
    	<BlockDefault className="blockDefault">
			
			<div className="blockContainer">
		      	<div className="row">
					<TitleH5 text="Recent" />
	      		</div>

	      		<div className="map">
					<div className="row">      		
						<div className="col avatar">
							<IconCode />
							<ThumbAvatar className="avatarImg" src={myImg} />
						</div>
						<div className="col infos">
							<div className="name">
								<TextAvatar text="Alice Martin" />
								<TextTime className="time" text="5 hours ago" />
							</div>
					      	<TextDefault className="textDefault" text="Recieved $760 for a Ruby project." />
				     		<TagEth text="1.2 ETH" />
				     		<NumberDefault text="$760" />
						</div>
			     	</div>
		     	</div>

		     	{/* DELETE */}
	      		<div className="map">
					<div className="row">      		
						<div className="col avatar">
							<IconDollar />
							<ThumbAvatar className="avatarImg" src={myImg} />
						</div>
						<div className="col infos">
							<div className="name">
								<TextAvatar text="Alice Martin" />
								<TextTime className="time" text="5 hours ago" />
							</div>
					      	<TextDefault className="textDefault" text="Recieved $760 for a Ruby project." />
				     		<TagEth text="1.2 ETH" />
				     		<NumberDefault text="$760" />
						</div>
			     	</div>
		     	</div>	      		
		     	<div className="map">
					<div className="row">      		
						<div className="col avatar">
							<IconCode />
							<ThumbAvatar className="avatarImg" src={myImg} />
						</div>
						<div className="col infos">
							<div className="name">
								<TextAvatar text="Alice Martin" />
								<TextTime className="time" text="5 hours ago" />
							</div>
					      	<TextDefault className="textDefault" text="Recieved $760 for a Ruby project." />
				     		<TagEth text="1.2 ETH" />
				     		<NumberDefault text="$760" />
						</div>
			     	</div>
		     	</div>
		     	{/* DELETE */}

    		</div>	    
	    </BlockDefault>
    );
  }
}

export default(UserActivity);
