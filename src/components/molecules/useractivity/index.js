import React from "react";
import LazyLoad from 'react-lazy-load';
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

const API = `static/api/activity.json`;

class UserActivity extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }
 
  componentDidMount() {
    //calling the content api
    fetch(API)
      .then(response => response.json())
      .then(result => this.setState({ 
        data: result.data 
      }));
  }

  render() {
    const { data } = this.state;
    return (
    	<BlockDefault className="blockDefault">
			
			<div className="blockContainer">
		      	<div className="row">
					<TitleH5 text="Recent" />
	      		</div>

	            {data.map((item, key) => {
	              return(
					<div className="map" key={key}>

						<div className="row">      		
							<div className="col avatar">
					     		{(item.icon === "code") ? <IconCode /> : <IconDollar />}
								
								<LazyLoad height={48} width={48}>
									<ThumbAvatar className="avatarImg" src={item.avatar} />
							  	</LazyLoad>
							</div>
							<div className="col infos">
								<div className="name">
									<TextAvatar text={item.name} />
									<TextTime className="time" text={item.date} />
								</div>
						      	<TextDefault className="textDefault" text={item.text} />
					     		{(item.btc === "") ? <TagEth text={item.eth} /> : <TagBtc text={item.btc} />}
					     		<NumberDefault text={item.earnings} />
							</div>
				     	</div>

			     	</div>
            	)})}	

    		</div>	    
	    </BlockDefault>
    );
  }
}

export default(UserActivity);
