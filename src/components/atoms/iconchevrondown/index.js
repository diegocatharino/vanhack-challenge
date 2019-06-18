import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Style
import { IconChevronDown } from './styled';

const Button = ( props ) => (
  	<IconChevronDown>
  		<span className="icon">
  			<FontAwesomeIcon icon="chevron-down" />
		</span>
  	</IconChevronDown>
);

export default(Button);
