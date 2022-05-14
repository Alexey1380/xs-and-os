import { useTheme } from 'styled-components';
import { Wrapper } from './styled';

export const Logo = (): JSX.Element => {
	const theme = useTheme();

	const xColor = theme.palette.secondary;
	const oColor = theme.palette.hightlight;
	return (
		<Wrapper>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				width='100%'
				height='100%'
				viewBox='0 0 343 205'
				fill='none'
			>
				<circle
					cx='240.5'
					cy='102.5'
					r='75'
					stroke={oColor}
					strokeWidth='55'
				/>
				<path
					d='M28 171L165 34'
					stroke={xColor}
					strokeWidth='55'
					strokeLinecap='round'
				/>
				<path
					d='M167.5 168.779L35.5001 36.7794'
					stroke={xColor}
					strokeWidth='55'
					strokeLinecap='round'
				/>
			</svg>
		</Wrapper>
	);
};
