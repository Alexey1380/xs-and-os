import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';

const Styles = createGlobalStyle`
	* { user-select: none; }
	*::selection { background: none; }
	*::-moz-selection { background: none; }
	body {
		font-family: 'PT Sans', sans-serif;
		background-color: ${(props) => props.theme.palette.primary};
	}
	a {
		color: ${(props) => props.theme.palette.secondary}
	}
`;

export const withGlobalStyles = (component: () => React.ReactNode) => () =>
	(
		<>
			<Normalize />
			<Styles />
			{component()}
		</>
	);
