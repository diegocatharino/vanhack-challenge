import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Style
import { NumberBigger } from './styled';

const Text = ( props ) => (
  	<NumberBigger {...props}>
  		{props.text}
  	</NumberBigger>
);

export default(Text);
