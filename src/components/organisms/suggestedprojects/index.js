import React from "react";
import UserProjects from '../../molecules/userprojects';
import BtnViewAll from '../../atoms/btnviewall';
import TitleH2 from '../../atoms/titleh2';
import { BlockWithSection } from './styled';

class Ranking extends React.Component {
  render() {
    return (
    	<BlockWithSection>

	  		<div className="sectionTitle">
		     	<div className="col-xs-10">
					<TitleH2 text="Suggested Projects" />
				</div>

		     	<div className="col-xs-2">
		     		<BtnViewAll />
		     	</div>
			</div>

			<UserProjects />	

	    </BlockWithSection>
    );
  }
}

export default(Ranking);
