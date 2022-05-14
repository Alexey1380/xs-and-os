import styled from 'styled-components';

export const Wrapper = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	display: flex;
	justify-content: center;
	box-sizing: border-box;
	padding: 4vh 7vw 0 7vw;
	background-color: ${(props) => props.theme.palette.primary};
	color: ${(props) => props.theme.palette.secondary};
`;

export const Container = styled.div`
	position: relative;
	width: 100%;
	max-width: 600px;
`;

export const ToggleWrapper = styled.div`
	position: absolute;
	right: 0;
	top: 0;
`;
