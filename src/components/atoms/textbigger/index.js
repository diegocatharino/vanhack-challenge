import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Style
import { TextBigger } from './styled';

const Text = ( props ) => (
  	<TextBigger {...props}>
  		{props.text}
  	</TextBigger>
);

export default(Text);
