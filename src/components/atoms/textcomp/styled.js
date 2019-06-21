// Import Styled
import styled from 'styled-components';

export const TextComp = styled.text`
	color: #79828B;
	font-size: 14px;
	line-height: 21px;
	letter-spacing: 0.75px;
	display: block;
	//specific fix for small devices
	@media (max-width: 340px) {
		letter-spacing: 0;
	    font-size: 13px;
	}
	strong{
		color: #10C172;
	}
`;