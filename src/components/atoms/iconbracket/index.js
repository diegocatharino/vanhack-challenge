import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Style
import { IconBracket } from './styled';

const Text = ( props ) => (
  	<IconBracket>
		<span className="roundIcon">
			<FontAwesomeIcon icon="chevron-left" />
			<FontAwesomeIcon icon="chevron-right" />
		</span>
  	</IconBracket>
);

export default(Text);
