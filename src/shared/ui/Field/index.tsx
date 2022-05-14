import { ComponentProps } from 'react';
import { Wrapper } from './styled';
import { CellList } from './CellList';
import { observer } from 'mobx-react-lite';

type Props = {
	cells: ComponentProps<typeof CellList>['cells'];
	onCellClick(index: number): void;
	isHide: boolean;
	highlited: ComponentProps<typeof CellList>['highlited'] | null;
};

export const Field = observer(({ cells, onCellClick, isHide, highlited }: Props) => {
	const handleClick = (e: React.MouseEvent<HTMLElement>) => {
		// TODO:
		/**
		 * type of e.target different from e.currentTarget
		 * e.target has no getAttribute() in type definition
		 * but that method exists.
		 * mb I'm wrong, but it works
		 */
		const dataIndex = (e.target as typeof e.currentTarget).getAttribute('data-index');

		if (!dataIndex) {
			return;
		}

		const index = Number(dataIndex);
		onCellClick(index);
	};

	return (
		<Wrapper
			hide={isHide}
			onClick={handleClick}
		>
			<CellList
				cells={cells}
				highlited={highlited}
			/>
		</Wrapper>
	);
});
