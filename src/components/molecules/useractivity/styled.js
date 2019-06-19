// Import Styled
import styled from 'styled-components';

export const BlockDefault = styled.div`
	.avatar{
		vertical-align: top;
		.avatarImg{
			margin-left: -16px;
			margin-right: 16px;
		    position: relative;
    		z-index: 2;
		}
	}
	.infos{
		position: relative;
		&:before{
		    content: "";
		    width: 1px;
		    background: #E6EBF0;
		    position: absolute;
		    left: -40px;
		    top: 50px;
		    height: 80%;
		    display: block;
		}
		text{
			margin-right: 16px;
		}
	}
`;