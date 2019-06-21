import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserRankings from '../../molecules/userrankings';
import BtnViewAll from '../../atoms/btnviewall';
import TitleH2 from '../../atoms/titleh2';
import { BlockWithSection } from './styled';

class TopEarnersAll extends React.Component {
  render() {
    return (
  		<BlockWithSection className="col-md-12">
			<UserRankings />	  	
	    </BlockWithSection>
    );
  }
}

export default(TopEarnersAll);
