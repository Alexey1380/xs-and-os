import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
0% { opacity: 0; transform: rotate(0)}
100% { opacity: 1;transform: rotate(360deg)}
`;

export const Wrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	color: ${(props) => props.theme.palette.secondary};
	animation-name: ${fadeIn};
	animation-duration: 1s;
	animation-iteration-count: 1;
	animation-timing-function: ease-out;
`;
