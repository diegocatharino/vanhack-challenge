// Import Styled
import styled from 'styled-components';

export const MenuContainer = styled.div`
	padding-top: 16px;
	padding-bottom: 16px;

	@media (min-width: 768px) {	
		padding-top: 40px;
		padding-bottom: 40px;
	}
	&:after{
		content: "";
		display: block;
		clear: both;
	}
	.right-area{
		button, text{
			float: right;
		}
		text{
			color: #fff;
		}
		.userBox {
		    position: absolute;
		    right: 0;
		    top: 22px;
		    background: #fff;
		    border-radius: 0px 0 8px 8px;
		    padding: 8px;
		    color: #6473d5;
		    z-index: 2;
		    li{
		    	border-bottom: 1px solid #ccc;
		    	margin-bottom:8px;
		    	padding-bottom:8px;
		    	&:last-child{
		    		padding-bottom: 0;
		    		border-bottom: none;
		    		margin-bottom: 0;
		    	}
		    	a{
		    		color: #6473d5;   
		    		text-decoration:none;
		    		&:hover{
		    			color: #42505C;
		    		}		
		    	}
		    }
		}
	}
	.notification{
	    position: relative;
	    top: -6px;
	    margin-right: 40px;
	}
	.show, .show .menu{
		display: block;
	}
	@media (min-width: 992px) {	
		.close{
			display: none;
		}
	}
`;