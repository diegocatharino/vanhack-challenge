import React, { Component } from 'react';
import IconBars from '../../atoms/iconbars';
import IconMap from '../../atoms/iconmap';
import IconChevronDown from '../../atoms/iconchevrondown';
import TitleH2 from '../../atoms/titleh2';
import Logo from '../../atoms/logo';
import MenuContent from '../../molecules/menucontent';
import { MenuContainer } from './styled';

class Header extends Component {

    render() {
        const { titleH2 } = this.props;
        return (	
			<MenuContainer>
				<div className="col-xs-6 left-area">
			     	<span className="hidden-md">
				    	<IconBars />
				    </span>
					<IconMap />
			     	<span className="hidden-xs">
						<Logo />
				    </span>					
					<MenuContent />
				</div>
				<div className="col-xs-6 right-area">
					<IconChevronDown />
					<TitleH2 text="Alex Doe" />
				</div>

			</MenuContainer>
        );
    }
}

export default Header;