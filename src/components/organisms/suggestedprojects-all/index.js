import React from "react";
import UserProjects from '../../molecules/userprojects';
import BtnViewAll from '../../atoms/btnviewall';
import TitleH2 from '../../atoms/titleh2';
import { BlockWithSection } from './styled';

class Projects extends React.Component {
  render() {
    return (
    	<BlockWithSection className="col-md-12">

			<UserProjects />	

	    </BlockWithSection>
    );
  }
}

export default(Projects);
