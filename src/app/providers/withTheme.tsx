import { Layout } from '../layout';
import { useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { generateTheme, getDarkModeValue } from '../lib/theme';

export const withTheme = (component: () => React.ReactNode) => () => {
	const [isDark, setIsDark] = useState<boolean>(getDarkModeValue());

	const toggleDarkMode = () => {
		setIsDark(!isDark);
		localStorage.setItem('darkMode', String(!isDark));
	};

	const currentTheme = useMemo(() => generateTheme(isDark), [isDark]);

	return (
		<>
			<ThemeProvider theme={currentTheme}>
				<Layout
					toggleTheme={toggleDarkMode}
					isDark={isDark}
				>
					{component()}
				</Layout>
			</ThemeProvider>
		</>
	);
};
