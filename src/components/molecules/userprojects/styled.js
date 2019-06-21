// Import Styled
import styled from 'styled-components';

export const BlockDefault = styled.div`
	.map{
		@media (min-width: 992px) {
	    	width: 31.3%;	
    	    display: inline-block;
    	    margin-right: 3%;
		}
		&:last-child{
			margin-right: 0;
		}
	}
	.name{
		display: inline-block;
		margin-left: 12px;
    	vertical-align: top;
    	margin-bottom: 24px;
	}
	.number{
		text{
			float: right;
		}
	}	
	.tag{
		text{
			float: right;
		}
	}
	.tags{
		text{
			margin-right: 12px;
		}
		> div{
			display: flex;
		}
		.number{
			text{    
				position: absolute;
    			right: 0;
    			margin-right: 0;
			}
		}
	}
	img{
		max-width: 48px;
		max-height: 48px;
	}
`;