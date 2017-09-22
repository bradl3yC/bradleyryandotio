import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
	color: ${props => props.color || "#666"};
	font-weight: bold;
  margin: 0 1vh;
	align-self: flex-end;
	text-decoration: none;

	@media (max-width: 700px) {
		font-size: .5em;
	}

`;

export default StyledLink;
