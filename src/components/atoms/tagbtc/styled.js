// Import Styled
import styled from 'styled-components';

export const TagBtc = styled.text`
	border-radius: 16px;
	background-color: #D286621a;
	color: #D28E62;
	font-weight: 500;
	font-size: 16px;
	line-height: 21px;
	letter-spacing: 0.75px;
    padding: 4px 12px 7px;	
    //specific fix for small devices
	@media (max-width: 340px) {
		letter-spacing: 0;
	    font-size: 15px;
	}
`;