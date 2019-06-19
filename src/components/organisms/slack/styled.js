// Import Styled
import styled from 'styled-components';

export const BlockSlack = styled.div`
	border-radius: 10px;
	background: linear-gradient(201.71deg, #8F9DF8 0%, #92A0FF 100%);
	box-shadow: 0 26px 51px 0 rgba(0,0,0,0.08);
	padding: 24px 16px;
	color: #fff;
	text-align: center;
	transition: opacity 0.3s;
	&.fade{
		opacity: 0;
	}
	.icon{
		font-size: 62px;
	}
	h5{
		font-weight: 700;
		font-size: 18px;
		line-height: 25px;
		margin-bottom: 16px;
	}
	p{
		opacity: 0.75;
		font-size: 13px;
		line-height: 20px;
		margin-bottom: 24px;
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
		padding: 14px 18px;
	    display: inline-block;
	    margin: 0 8px;
		&.active{
			color: #fff;
			background: #6574D6;
			border-color: #6574D6;
			text-decoration: none;
		}
	}
`;