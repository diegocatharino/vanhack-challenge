// Import Styled
import styled from 'styled-components';

export const MenuContent = styled.div`
	padding-top: 32px;
	a{
		text-decoration: none;
		color: #fff;    
		border-radius: 16px;
	    background-color: transparent;
	    color: #fff;
	    font-weight: normal;
	    font-size: 16px;
	    line-height: 21px;
	    letter-spacing: 0.75px;
	    margin-right: 24px;
	    padding: 4px 12px 7px;
	    &:hover, &.active{
	    	font-weight: 600;
	    	background-color: #7481D1;
	    }
	}
	// mobile menu only
	@media (max-width: 991px) {
	    position: fixed;
	    top: 0;
	    left: 0;
	    z-index: 999;
	    height: 100vh;
	    width: 100vw;
	    background: #7481d1e0;
    	padding: 32px 24px;
	    a{
	        display: block;
		    text-align: left;
		    font-size: 32px;
		    margin: 0 0 20px;
		    clear: both;
		    width: fit-content;
		    padding: 16px 24px;
	    }
	}
`;