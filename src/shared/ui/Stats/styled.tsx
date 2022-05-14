import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
	display: grid;
	width: 80%;
	grid-template-columns: repeat(3, 1fr);
	padding: 10px;
	margin-top: 30px;
	margin-bottom: 50px;
	text-transform: uppercase;
`;

export const StatWrapper = styled.div`
	font-size: 15px;
	font-weight: bold;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
`;

const countAnimation = keyframes`
	 0% { transform: scale(0); }
	 80% { transform: scale(1.5); }
 100% { transform: scale(1);}
`;

export const Count = styled.div`
	font-size: 35px;
	animation-name: ${countAnimation};
	animation-duration: 0.3s;
	animation-iteration-count: 1;
`;
