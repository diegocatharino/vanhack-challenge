// Import Styled
import styled from 'styled-components';

export const BlockDefault = styled.div`
	.blockContainer{
		@media (min-width: 992px) {
	    	max-height: 405px;	
		}
	}
	.menu{
		text{
			float: right;
			margin-left: 16px;
		}
		.active{
			color: #6271D2;
		}
	}
	.order{
		color: #42505C;
		font-family: "Roboto Mono";
		font-size: 20px;
		line-height: 43px;	
		font-weight:800;
	}
	.number{
		text{
			float: right
		}
	}
	.name{    
		vertical-align: top;
		display: inline-block;
		margin-left: 12px;
		text {
		    line-height: 20px;
		}
		.num{
			color: #79828B;
			font-size: 16px;
			letter-spacing: 1px;	
			line-height: 25px;
		}
	}
`;