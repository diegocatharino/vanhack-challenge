import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Style
import { IconNotification } from './styled';

const Text = ( props ) => (
  	<IconNotification className="notification">
  		<div className="number">3</div>
  		<FontAwesomeIcon icon="bell" />
  	</IconNotification>
);

export default(Text);
