import React from "react";
import UserActivity from '../../molecules/useractivity';
import TitleH2 from '../../atoms/titleh2';
import BtnViewAll from '../../atoms/btnviewall';
import { BlockWithSection } from './styled';

class Activity extends React.Component {
  render() {
    return (
    	<BlockWithSection>

	  		<div className="sectionTitle">
		     	<div className="col-xs-10">
					<TitleH2 text="Activity" />
				</div>

		     	<div className="col-xs-2">
		     		<BtnViewAll />
		     	</div>
			</div>

			<UserActivity />	

	    </BlockWithSection>
    );
  }
}

export default(Activity);
