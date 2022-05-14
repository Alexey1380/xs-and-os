import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	height: 100%;
	padding-top: 50px;
	padding-bottom: 35px;
`;

export const ItemsBlock = styled.div`
	margin-top: 90px;
	margin-bottom: 40px;
	align-self: center;
	display: flex;
	flex-direction: column;
	width: 80%;
	gap: 10px;
`;

export const MenuItem = styled(Link)<{ disabled?: boolean }>`
	@media (hover: hover) and (pointer: fine) {
		&:hover:not(:active) {
			filter: brightness(0.8);
		}
	}
	pointer-events: ${(props) => (props.disabled ? 'none' : 'all')};
	opacity: ${(props) => (props.disabled ? '0.1' : 1)};
	color: inherit;
	font-weight: bold;
	font-size: 17px;
	border: none;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.palette.secondary};
	color: ${(props) => props.theme.palette.primary};
	width: 100%;
	border-radius: 8px;
	min-height: 40px;
	text-decoration: none;
	text-transform: uppercase;
`;
