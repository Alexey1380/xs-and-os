import styled from 'styled-components';

type WrapperProps = { hide?: boolean };

export const Wrapper = styled.div<WrapperProps>`
	box-sizing: border-box;
	position: relative;
	width: 60vw;
	height: 60vw;
	font-size: 30px;

	@media only screen and (min-device-width: ${(props) => props.theme.breakpoints.sm}px) {
		width: 50vw;
		height: 50vw;
	}
	@media only screen and (min-device-width: ${(props) => props.theme.breakpoints.md}px) {
		width: 25vw;
		height: 25vw;
	}

	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: repeat(3, 1fr);
	gap: 1vmin;

	background-color: ${(props) => props.theme.palette.secondary};

	filter: opacity(${(props) => (props.hide ? '0.3' : '1')});
	transition: all ${(props) => (props.hide ? '.6s' : 0)};
`;
