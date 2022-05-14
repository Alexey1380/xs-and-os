import { getOppositeMark } from '@/shared/lib/field';
import { CellType, FieldData } from '@/types';

export function getIndexForAI(AIMark: CellType, field: FieldData): number {
	let index = getWinIndexFor(AIMark, field);

	if (index) {
		return index;
	}

	index = getWinIndexFor(getOppositeMark(AIMark), field);
	if (index) {
		return index;
	}

	const freeCells = field
		.map((value, i) => ({ value, i }))
		.filter((cellData) => cellData.value === CellType.empty);

	const cellForMarkIndex = Math.floor(Math.random() * freeCells.length);

	if (field[5] === CellType.empty && Math.random() < 0.4) {
		return 5;
	}

	return freeCells[cellForMarkIndex]?.i as number;
}

type WinIndexes = [number, number, number];

const lines: WinIndexes[] = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

function getWinIndexFor(mark: CellType, field: FieldData): number | null {
	const linesInfo = lines.map((line) => {
		return line.reduce(
			(acc, cell) => {
				const index = field[cell] as CellType;
				acc[index].count++;
				acc[index].indexes.push(cell);
				return acc;
			},
			{
				[CellType.empty]: { count: 0, indexes: [] as number[] },
				[CellType.o]: { count: 0, indexes: [] as number[] },
				[CellType.x]: { count: 0, indexes: [] as number[] },
			},
		);
	});

	const lineInfo = linesInfo.find((line) => {
		if (line[mark].count === 2 && line[CellType.empty].count === 1) {
			return true;
		}
		return false;
	});

	if (lineInfo) {
		return lineInfo[CellType.empty].indexes[0] as number;
	}

	return null;
}
