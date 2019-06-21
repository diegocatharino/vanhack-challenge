import Link from 'next/link';
import UserActivity from '../../molecules/useractivity';
import TitleH2 from '../../atoms/titleh2';
import BtnViewAll from '../../atoms/btnviewall';
import { BlockWithSection } from './styled';

class Activity extends React.Component {
  render() {
    return (
    	<BlockWithSection className="col-md-8">

	  		<div className="sectionTitle">
		     	<div className="col-xs-6">
					<TitleH2 text="Activity" />
				</div>

		     	<div className="col-xs-6">
				    <Link href="activity">
				    	<a><BtnViewAll /></a>
		     		</Link>
		     	</div>
			</div>

			<UserActivity />	

	    </BlockWithSection>
    );
  }
}

export default(Activity);
