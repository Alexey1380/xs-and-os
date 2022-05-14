import { CellType } from '@/types';
import { OIcon, Wrapper, XIcon } from './styled';

type Props = {
	value: CellType;
	isHighlighted: boolean;
	index: number;
};

export const Cell = ({ value, isHighlighted, index }: Props) => {
	let icon: React.ReactNode = null;

	if (value === CellType.x) {
		icon = <XIcon isHighlighted={isHighlighted} />;
	}

	if (value === CellType.o) {
		icon = <OIcon isHighlighted={isHighlighted} />;
	}

	return (
		<Wrapper
			isHighlighted={isHighlighted}
			data-index={index}
		>
			{icon}
		</Wrapper>
	);
};
