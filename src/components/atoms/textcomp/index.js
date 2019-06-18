import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Style
import { TextComp } from './styled';

const Text = ( props ) => (
  	<TextComp {...props}>
  		{props.text}
  	</TextComp>
);

export default(Text);
