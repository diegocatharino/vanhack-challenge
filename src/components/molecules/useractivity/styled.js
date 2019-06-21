// Import Styled
import styled from 'styled-components';

export const BlockDefault = styled.div`
	.blockContainer{
		@media (min-width: 992px) {
	    	max-height: 405px;	
		}
	}

	.avatar{
		vertical-align: top;
		.avatarImg{
			margin-left: -16px;
			margin-right: 16px;
		    position: relative;
    		z-index: 2;
		}

		// mobile fix only
		@media (max-width: 422px) {
		    max-width: 38%;
    		float: left;
		}


		@media (min-width: 992px) {
			width: 88px;
		}
	}
	.infos{
		position: relative;
		margin-bottom: 8px;
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
		.textDefault{
			padding-top: 2px;
		}
		.name{
			position: relative;
			.time{
				@media (min-width: 992px) {
				    position: absolute;
				    right: 0;    
				    top: 4px;
				}
			}
		}
		// mobile fix only
		@media (max-width: 422px) {
		    max-width: 62%;
		}

		@media (min-width: 992px) {
			width: calc(100% - 88px);
		}
	}
`;