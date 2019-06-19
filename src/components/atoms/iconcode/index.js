import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Style
import { IconCode } from './styled';

const Text = ( props ) => (
  	<IconCode>
		<span className="roundIcon">
			<FontAwesomeIcon icon="code" />
		</span>
  	</IconCode>
);

export default(Text);
