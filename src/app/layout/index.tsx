import { DarkModeToggle } from '@/app/layout/DarkModeToggle';
import { Container, ToggleWrapper, Wrapper } from './styled';

type Props = {
	isDark: boolean;
	toggleTheme(): void;
	children: React.ReactNode;
};

export const Layout = ({ isDark, toggleTheme, children }: Props) => {
	return (
		<Wrapper>
			<Container>
				<ToggleWrapper>
					<DarkModeToggle
						isDark={isDark}
						onClick={toggleTheme}
					/>
				</ToggleWrapper>
				{children}
			</Container>
		</Wrapper>
	);
};
