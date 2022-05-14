import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		palette: {
			primary: string;
			secondary: string;
			hightlight: string;
		};
		breakpoints: {
			sm: number;
			md: number;
			lg: number;
			xl: number;
		};
	}
}
