import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
// Import Style
import { MenuContent } from './styled';

const Menu = ( props ) => (
  	<MenuContent className="col-xs-12">
	    <Link href="/">
	      <a className="active">Home</a>
	    </Link>

	    <Link href="/projects">
	      <a>My Projects</a>
	    </Link>

	    <Link href="/payments">
	      <a>Payments</a>
	    </Link>

	    <Link href="/activity">
	      <a>Activity</a>
	    </Link>

	    <Link href="/settings">
	      <a>Settings</a>
	    </Link>
  	</MenuContent>
);

export default(Menu);
