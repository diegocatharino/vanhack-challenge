import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

// Import Style
import { TextComp } from './styled';

class Text extends React.Component {
  render() {
    // This must be exactly one element or it will warn.
    const children = this.props.children;
    return (
  	<TextComp>
  		{children}
  	</TextComp>
    );
  }
}
Text.propTypes = {
  children: PropTypes.string
};
export default(Text);
