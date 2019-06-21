import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Style
import { IconDollar } from './styled';

const Text = ( props ) => (
  	<IconDollar>
		<span className="roundIcon">
			<FontAwesomeIcon icon="dollar-sign" />
		</span>
  	</IconDollar>
);

export default(Text);
