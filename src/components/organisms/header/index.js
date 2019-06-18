import React, { Component } from 'react';
import IconBars from '../../atoms/iconbars';
import IconMap from '../../atoms/iconmap';
import IconChevronDown from '../../atoms/iconchevrondown';
import TitleH2 from '../../atoms/titleh2';
import MenuContent from '../../molecules/menucontent';
import { MenuContainer } from './styled';

class Header extends Component {

    render() {
        const { titleH2 } = this.props;
        return (	
			<MenuContainer>
				<div className="col-xs-10 left-area">
				    <MenuContent />
				    <IconBars />
					<IconMap />
				</div>
				<div className="col-xs-2 right-area">
					<IconChevronDown />
					<TitleH2 text="Alex Doe" />
				</div>

			</MenuContainer>
        );
    }
}

export default Header;