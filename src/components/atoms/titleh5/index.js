import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Style
import { TitleH5 } from './styled';

const Text = ( props ) => (
  	<TitleH5 {...props}>
  		<h5>{props.text}</h5>
  	</TitleH5>
);

export default(Text);
