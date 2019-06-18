// Import Styled
import styled from 'styled-components';

export const MenuContainer = styled.div`
	padding: 16px 0;
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
	}
`;