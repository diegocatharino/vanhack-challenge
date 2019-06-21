import React, { Component } from 'react';
import Link from 'next/link';
import IconBars from '../../atoms/iconbars';
import IconMap from '../../atoms/iconmap';
import IconChevronDown from '../../atoms/iconchevrondown';
import IconNotification from '../../atoms/iconnotification';
import TitleH2 from '../../atoms/titleh2';
import Logo from '../../atoms/logo';
import BtnClose from '../../atoms/btnclose';
import MenuContent from '../../molecules/menucontent';
import { MenuContainer } from './styled';

class Header extends Component {
	 constructor(props) {
	    super(props);

	    this.state = {
	        showMenu: "hidden-xs",
	        showUserBox: "hidden"
	    };

    	this.openMenu = this.openMenu.bind(this);
    	this.toggleUserBox = this.toggleUserBox.bind(this);
	}
 	openMenu() {	
	    var css = (this.state.showMenu === "hidden-xs") ? "show" : "hidden-xs";
	    this.setState({"showMenu":css});
	}	
	closeMenu() {
	    this.setState({showMenu: "hidden-xs"});
	}
 	toggleUserBox() {	
	    var toggle = (this.state.showUserBox === "hidden") ? "show" : "hidden";
	    this.setState({"showUserBox":toggle});
	}	
    render() {
        const { titleH2 } = this.props;
        return (	
			<MenuContainer className="col-md-12">
				<div className="col-xs-6 left-area">
			     	<span className="hidden-md" onClick={this.openMenu.bind(this)}>
				    	<IconBars />
				    </span>
					<IconMap />
			     	<span className="hidden-xs">
						<Logo />	
				    </span>				
				</div>

				<div className="col-xs-6 right-area">
					<span onClick={this.toggleUserBox.bind(this)}>
						<IconChevronDown />
					</span>
		     		<span className={this.state.showUserBox}>
			     		<span className="userBox">
							<ul>
								<li>
								    <Link href="projects">
								      <a>My Projects</a>
								    </Link>
	    						</li>
								<li>
								    <Link href="settings">
								      <a>Settings</a>
								    </Link>
	    						</li>
							</ul>
						</span>
				    </span>	

					<TitleH2 text="Alex Doe" />
			     	<span className="hidden-xs">
						<IconNotification />	
				    </span>		
				</div>

				<div className="col-xs-12">
		     		<span className={this.state.showMenu}>
			     		<span className="hidden-xs menu">
					     	<span onClick={this.closeMenu.bind(this)}>
			     				<BtnClose />
		     				</span>
							<MenuContent />
						</span>
				    </span>		
				</div>
			</MenuContainer>
        );
    }

}

export default Header;