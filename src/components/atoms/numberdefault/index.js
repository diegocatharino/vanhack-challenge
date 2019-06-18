import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Style
import { NumberDefault } from './styled';

const Text = ( props ) => (
  	<NumberDefault {...props}>
  		{props.text}
  	</NumberDefault>
);

export default(Text);
