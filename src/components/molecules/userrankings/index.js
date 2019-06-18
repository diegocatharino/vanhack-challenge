import React from "react";
import TagEth from '../../atoms/tageth';
import TagBtc from '../../atoms/tagbtc';
import TitleH5 from '../../atoms/titleh5';
import TextTime from '../../atoms/texttime';
import ThumbAvatar from '../../atoms/thumbavatar';
import TextAvatar from '../../atoms/textavatar';
import NumberDefault from '../../atoms/numberdefault';
import myImg from '../../../static/images/thumbavatar-default.png';
// Import Style
import { BlockDefault } from './styled';

class UserRankings extends React.Component {
  render() {
    return (
    	<BlockDefault className="blockDefault">

	      	<div className="row">
				<div className="col-xs-6">
					<TitleH5 text="Rankings" />
	      		</div>
	      		<div className="col-xs-6 menu">
					<TextTime className="active" text="All time" />
					<TextTime text="This month" />
	      		</div>
      		</div>

	      	<div className="row bottomBorder">
				<div className="col-xs-1">
					<span className="order">1.</span>
				</div>
				<div className="col-xs-11">
					<ThumbAvatar src={myImg} />
					<div className="name">
						<TextAvatar text="Alice Martin" />
						<NumberDefault className="num" text="$760" />
					</div>
				</div>
	     	</div>	     

	    </BlockDefault>
    );
  }
}

export default(UserRankings);
