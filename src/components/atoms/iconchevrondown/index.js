import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LazyLoad from 'react-lazy-load';
// Import Style
import { IconChevronDown } from './styled';

const Button = ( props ) => (
	<LazyLoad>
	  	<IconChevronDown>
	  		<span className="icon">
	  			<FontAwesomeIcon icon="chevron-down" />
			</span>
	  	</IconChevronDown>
  	</LazyLoad>	
);

export default(Button);
