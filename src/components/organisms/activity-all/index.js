import React from "react";
import UserActivity from '../../molecules/useractivity';
import TitleH2 from '../../atoms/titleh2';
import BtnViewAll from '../../atoms/btnviewall';
import { BlockWithSection } from './styled';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faDollarSign, faTimesCircle, faBell, faMapMarker, faStar, faBars, faChevronDown, faChevronLeft, faChevronRight, faArrowRight, faCode } from '@fortawesome/free-solid-svg-icons';
library.add(fab, faDollarSign, faTimesCircle, faBell, faMapMarker, faStar, faBars, faChevronDown, faChevronLeft, faChevronRight, faArrowRight, faCode)

class ActivityAll extends React.Component {
  render() {
    return (
    	<BlockWithSection className="col-md-12">

			<UserActivity />	

	    </BlockWithSection>
    );
  }
}

export default(ActivityAll);
