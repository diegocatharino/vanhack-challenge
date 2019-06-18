import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Style
import { BtnViewAll } from './styled';

const Button = ( props ) => (
  	<BtnViewAll>
 		<span>View All</span>
		<FontAwesomeIcon icon="arrow-right" />
  	</BtnViewAll>
);

export default(Button);
