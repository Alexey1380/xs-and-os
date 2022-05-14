import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	box-sizing: border-box;
	padding-top: 130px;
`;

export const Exit = styled(Link)`
	@media (hover: hover) and (pointer: fine) {
		&:hover:not(:active) {
			filter: brightness(0.8);
		}
	}
	color: ${(props) => props.theme.palette.secondary};
	width: 35px;
	height: 35px;
	position: absolute;
	top: 0;
	left: 0;
	user-select: none;
`;
