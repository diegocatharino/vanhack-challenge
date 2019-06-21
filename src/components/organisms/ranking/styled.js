// Import Styled
import styled from 'styled-components';

export const BlockDefault = styled.div`
	.blockContainer{
		@media (min-width: 992px) {
			max-height: 246px;
		}
	}
	li{
		display:inline-block;
		margin-right: 12px;
		margin-bottom: 16px;
	    &:after{
	    	content: "";
	    	clear: both;
	    	display: block;
	    }
	}
`;