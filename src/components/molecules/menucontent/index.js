import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
// Import Style
import { MenuContent } from './styled';

const Menu = ( props ) => (
  	<MenuContent>
	    <Link href="/">
	      <a>Home</a>
	    </Link>
  	</MenuContent>
);

export default(Menu);
