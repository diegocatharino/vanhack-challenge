import Link from 'next/link';
import LazyLoad from 'react-lazy-load';
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

const API = `static/api/ranking.json`;

class UserRankings extends React.Component {

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
						<div className="col-xs-4">
							<TitleH5 text="Rankings" />
			      		</div>
			      		<div className="col-xs-8 menu">
			      			<Link href="activity">
							      <a><TextTime className="active" text="All time" /></a>
						    </Link>
							
							<TextTime text="This month" />
			      		</div>
		      		</div>

		            {data.map((item, key) => {
		              return(
						<div className="map" key={key}>

					      	<div className="row bottomBorder">
								<div className="col-xs-1">
									<span className="order">{item.number}.</span>
								</div>
								<div className="col-xs-11">
									<LazyLoad height={48} width={48}>
										<ThumbAvatar alt={item.name} src={item.avatar} />
								  	</LazyLoad>
									<div className="name">
										<TextAvatar text={item.name} />
										<NumberDefault className="num" text={item.earnings} />
									</div>
								</div>
					     	</div>	 

				     	</div>
		            )})}			     	

		     	</div>
		    </BlockDefault>
	    );
 	}
}

export default(UserRankings);
