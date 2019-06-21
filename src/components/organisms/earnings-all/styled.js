// Import Styled
import styled from 'styled-components';

export const BlockDefault = styled.div`
	.blockContainer{
		@media (min-width: 992px) {
			max-height: 246px;
		}
	}
	h5{
		margin-bottom: 0;
		font-size: 12px;
	}
	.numbers{
		@media (min-width: 992px) {
			margin-bottom: 24px;
		}
		text{
		    clear: both;
    		display: block;
		}
	}
	.tags{
		text{
		    clear: both;
		    display: block;
		    width: fit-content;
		    margin-bottom: 4px;;
		}
	}
`;