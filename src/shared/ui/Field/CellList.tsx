import { FieldData } from '@/types';
import { observer } from 'mobx-react-lite';
import { Cell } from './Cell';

type Props = {
	cells: FieldData;
	highlited: number[] | null;
};

export const CellList = observer(({ cells, highlited }: Props) => {
	return (
		<>
			{cells.map((cell, index) => (
				<Cell
					key={index}
					index={index}
					value={cell}
					isHighlighted={Boolean(highlited?.includes(index))}
				/>
			))}
		</>
	);
});
