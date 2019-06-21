import React from "react";
import LazyLoad from 'react-lazy-load';
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

const API = `static/api/projects.json`;

class UserProjects extends React.Component {

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

            {data.map((item, key) => {
          	  return(
	    		<div className="map" key={key}>
					<div className="blockContainer">
				      	<div className="row">
							<div className="col-xs-10">
								<LazyLoad height={48} width={48}>
									<ThumbAvatar src={item.avatar} />
							  	</LazyLoad>
								<div className="name">
									<TextAvatar text={item.name} />
									<TextTime text={item.date} />
								</div>
							</div>
							<div className="col-xs-2 tag">
								<TagDefault text={item.tag} />
							</div>
				     	</div>

				      	<div className="row bottomBorder">
				      		<TextBigger text={item.text} />  	
				     	</div>

				      	<div className="row tags">
					     	<div className="col-xs-10">
					     		<TagEth text={item.eth} />
					     		<TagBtc text={item.btc} />
					     	</div>  
					     	<div className="col-xs-2 number">
					     		<NumberDefault text={item.earnings} />
					     	</div>  
				    	</div>	  
			    	</div>	       
		    	</div>
        	)})}	
	    
	    </BlockDefault>
    );
  }
}

export default(UserProjects);
