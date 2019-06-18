import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Style
import { TextDefault } from './styled';

const Text = ( props ) => (
  	<TextDefault {...props}>
  		{props.text}
  	</TextDefault>
);

export default(Text);
