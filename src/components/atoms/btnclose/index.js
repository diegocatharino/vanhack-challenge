import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Import Style
import { BtnClose } from './styled';

const Text = ( props ) => (
  	<BtnClose className="close"> 
  		<FontAwesomeIcon icon="times-circle" />
  	</BtnClose>
);

export default(Text);
