import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
  	<div className="menuContainer">

	    <div className="menuContent">
		    <Link href="/">
		      <a style={linkStyle}>Home</a>
		    </Link>
	    </div>	  

	  	<span className="bars">
	  		<FontAwesomeIcon icon="bars" />
  		</span>

	  	<span className="mapMarker">
	  		<FontAwesomeIcon icon="map-marker" />
	  	</span>

	  	<span className="user">
	  		Alex Doe
	  	</span>

	  	<span className="chevronCircleDown">
	  		<FontAwesomeIcon icon="chevron-circle-down" />
	  	</span>

    </div>
  </div>
);

export default Header;