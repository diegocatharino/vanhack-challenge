import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserRankings from '../../molecules/userrankings';
import BtnViewAll from '../../atoms/btnviewall';
import TitleH2 from '../../atoms/titleh2';
import { BlockWithSection } from './styled';

class TopEarners extends React.Component {
  render() {
    return (
  		<BlockWithSection>

	  		<div className="sectionTitle">
		     	<div className="col-xs-10">
					<TitleH2 text="Top Earners" />
				</div>

		     	<div className="col-xs-2">
		     		<BtnViewAll />
		     	</div>
			</div>

			<UserRankings />	  	

	    </BlockWithSection>
    );
  }
}

export default(TopEarners);
