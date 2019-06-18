// Import Style
import { TagDefault } from './styled';

const Text = ( props ) => (
  	<TagDefault {...props}>
  		{props.text}
  	</TagDefault>
);

export default(Text);