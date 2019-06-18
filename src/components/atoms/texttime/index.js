import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Style
import { TextTime } from './styled';

const Text = ( props ) => (
  	<TextTime {...props}>
  		{props.text}
  	</TextTime>
);

export default(Text);
