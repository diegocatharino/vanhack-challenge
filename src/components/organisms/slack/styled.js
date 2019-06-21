// Import Styled
import styled from 'styled-components';

export const BlockSlack = styled.div`
	transition: opacity 0.3s;
	.blockSlackContainer{
		border-radius: 10px;
		background: linear-gradient(201.71deg, #8F9DF8 0%, #92A0FF 100%);
		box-shadow: 0 26px 51px 0 rgba(0,0,0,0.08);
		padding: 24px 16px;
		color: #fff;
		text-align: center;
		position: relative;
		@media (min-width: 992px) {
			text-align: left;
			padding: 32px 48px;
			margin: 24px 0 16px;
		}
		&:after{
		    content: "";
		    clear: both;
		    display: block;
		}
	}
	
	&.fade{
		opacity: 0;
	}
	.row{
		@media (min-width: 992px) {
	    	margin: 0;   
	    	display: flex;
    		justify-content: flex-start;
    		align-items: center;
		}
	}
	.icon{
		font-size: 62px;
		margin-bottom: 16px;
		@media (min-width: 992px) {
			margin-bottom: 0;
		}
	}
	h5{
		font-weight: 700;
		font-size: 18px;
		line-height: 25px;
		margin-bottom: 16px;
		letter-spacing: 0.75px;
		@media (min-width: 992px) {
			font-size: 24px;
		}		
	}
	p{
		opacity: 0.75;
		font-size: 13px;
		line-height: 20px;
		margin-bottom: 24px;
		letter-spacing: 0.75px;
		@media (min-width: 992px) {
			margin-bottom: 0;
			font-size: 16px;
			line-height: 24px;
		}
	}
	.btns{
		@media (max-width: 991px) {
			max-width: fit-content;
		    margin: 0 auto;
		    display: block;
		    float: none;
		}	
		@media (min-width: 992px) {
			.col{
				float: right;
			}
		}
	}
	.btnCta{
		cursor: pointer;
		font-weight: 500;
		font-size: 14px;
		letter-spacing: 1.75px;
		line-height: 15px;	
		box-sizing: border-box;
		border: 1px solid #FFFFFF;
		border-radius: 6px;
		text-transform: uppercase;
	    display: inline-block;
        padding: 14px 10px;
		margin: 0 4px;
		@media (min-width: 992px) {
			padding: 14px 18px;
	    	margin: 0 6px;
		}
	}
	.active{
		float: right;
		a{
			color: #fff;
			background: #6574D6;
			border-color: #6574D6;
			text-decoration: none;
		}
	}	
`;