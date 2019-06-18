import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Style
import { TextAvatar } from './styled';

const Text = ( props ) => (
  	<TextAvatar {...props}>
  		{props.text}
  	</TextAvatar>
);

export default(Text);
