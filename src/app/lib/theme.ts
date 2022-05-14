import { DefaultTheme } from 'styled-components';
import { colors } from '../../shared/config/colors';

const dark = {
	primary: colors.black,
	secondary: colors.white,
};

const light = {
	primary: colors.white,
	secondary: colors.black,
};

export const generateTheme = (isDark: boolean): DefaultTheme => {
	const additionColors = isDark ? dark : light;
	return {
		breakpoints: {
			sm: 600,
			md: 900,
			lg: 1200,
			xl: 1536,
		},
		palette: {
			hightlight: colors.yellow,
			...additionColors,
		},
	};
};

export function getDarkModeValue(): boolean {
	const localDarkMode = localStorage.getItem('darkMode');
	if (localDarkMode !== null) {
		return localDarkMode === 'true';
	}

	return window.matchMedia('(prefers-color-scheme: dark)').matches === true;
}
