import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 25px;
	height: 25px;
	right: 30px;
	top: 30px;
	border-radius: 50px;
	background-color: ${(props) => props.theme.palette.hightlight};
	padding: 7px;
	transition: transform 0.3s;

	@media (hover: hover) and (pointer: fine) {
		&:hover:not(:active) {
			filter: brightness(0.8);
		}
	}
	&:active {
		transform: scale(0.7);
	}

	@media only screen and (min-device-width: ${(props) => props.theme.breakpoints.sm}px) {
		width: 30px;
		height: 30px;
	}
	@media only screen and (min-device-width: ${(props) => props.theme.breakpoints.md}px) {
		width: 25px;
		height: 25px;
	}
`;
