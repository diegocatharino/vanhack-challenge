import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Style
import { IconStar } from './styled';

const Text = ( props ) => (
  	<IconStar>
		<span className="roundIcon">
  			<FontAwesomeIcon icon="star" />
		</span>
  	</IconStar>
);

export default(Text);
