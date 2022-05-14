import { colors } from '@/shared/config/colors';
import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div<{ isHighlighted: boolean }>`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background-color: ${(props) =>
		props.isHighlighted ? props.theme.palette.hightlight : props.theme.palette.primary};
	color: ${(props) => (props.isHighlighted ? colors.black : props.theme.palette.secondary)};
	transition: background-color ${(props) => (props.isHighlighted ? '0.8s' : '0')};
`;

const markAnimation = keyframes`
	 0% { transform: scale(0); }
 100% { transform: scale(1);}
`;

export const XIcon = styled.div<{ isHighlighted: boolean }>`
	will-change: transform;
	width: 50%;
	height: 50%;
	animation-name: ${markAnimation};
	animation-duration: 0.3s;
	animation-iteration-count: 1;

	&:before {
		content: '';
		position: absolute;
		background-color: ${(props) =>
			props.isHighlighted ? colors.black : props.theme.palette.secondary};
		left: 43%;
		top: -9%;
		width: 14%;
		height: 120%;
		transform: rotate(-45deg);
	}

	&:after {
		right: 43%;
		top: -9%;
		content: '';
		position: absolute;
		background-color: ${(props) =>
			props.isHighlighted ? colors.black : props.theme.palette.secondary};
		width: 14%;
		height: 120%;
		transform: rotate(45deg);
	}
`;

export const OIcon = styled.div<{ isHighlighted: boolean }>`
	display: flex;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	width: 48%;
	height: 48%;
	border-radius: 100%;
	border-color: ${(props) => (props.isHighlighted ? colors.black : props.theme.palette.secondary)};
	border: 0.8vmax solid;
	animation-name: ${markAnimation};
	animation-duration: 0.3s;
	animation-iteration-count: 1;
`;
