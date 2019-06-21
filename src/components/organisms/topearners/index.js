import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserRankings from '../../molecules/userrankings';
import BtnViewAll from '../../atoms/btnviewall';
import TitleH2 from '../../atoms/titleh2';
import { BlockWithSection } from './styled';

class TopEarners extends React.Component {
  render() {
    return (
  		<BlockWithSection className="col-md-4">

	  		<div className="sectionTitle">
		     	<div className="col-xs-6">
					<TitleH2 text="Top Earners" />
				</div>

		     	<div className="col-xs-`6">
				    <Link href="payments">
				    	<a><BtnViewAll /></a>
		     		</Link>		     	
	     		</div>
			</div>

			<UserRankings />	  	

	    </BlockWithSection>
    );
  }
}

export default(TopEarners);
