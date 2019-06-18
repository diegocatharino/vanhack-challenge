import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Style
import { TitleH2 } from './styled';

const Text = ( props ) => (
  	<TitleH2 {...props}>
  		<h2>{props.text}</h2>
  	</TitleH2>
);

export default(Text);
