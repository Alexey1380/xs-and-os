import { CellType, FieldData } from '@/types';

export const getOppositeMark = (mark: CellType): CellType => {
	if (mark === CellType.empty) {
		throw new Error('Mark must be equal X or O');
	}

	if (mark === CellType.x) {
		return CellType.o;
	}

	return CellType.x;
};

export const getWinLine = (
	index: number,
	mark: CellType,
	field: FieldData,
): [number, number, number] | null => {
	const column = index % 3;
	const row = Math.floor(index / 3);

	let winLine: number[] = [];

	// check row
	for (let i = 0 + row * 3; i < 3 + row * 3; i++) {
		if (field[i] === mark) {
			winLine.push(i);
		} else {
			winLine = [];
			break;
		}
	}

	if (winLine.length > 0) {
		return winLine as [number, number, number];
	}

	// check column
	for (let i = 0 + column; i < 3 * 3 + column; i += 3) {
		if (field[i] === mark) {
			winLine.push(i);
		} else {
			winLine = [];
			break;
		}
	}

	if (winLine.length > 0) {
		return winLine as [number, number, number];
	}

	// check left diagonal
	if (index % 4 === 0) {
		for (let i = 0; i <= 8; i += 4) {
			if (field[i] === mark) {
				winLine.push(i);
			} else {
				winLine = [];
				break;
			}
		}
	}

	if (winLine.length > 0) {
		return winLine as [number, number, number];
	}

	// check right diagonal
	if (index % 2 === 0 && index % 4 !== 0) {
		for (let i = 2; i <= 6; i += 2) {
			if (field[i] === mark) {
				winLine.push(i);
			} else {
				winLine = [];
				break;
			}
		}
	}

	if (winLine.length > 0) {
		return winLine as [number, number, number];
	}

	return null;
};

export const getNextStats = (
	winner: CellType,
	stats: [number, number, number],
): [number, number, number] => {
	const newStats = [...stats];
	if (winner === CellType.x) {
		newStats[0] += 1;
		return newStats as [number, number, number];
	}
	if (winner === CellType.o) {
		newStats[2] += 1;
		return newStats as [number, number, number];
	}

	if (winner === CellType.empty) {
		newStats[1] += 1;
		return newStats as [number, number, number];
	}

	return stats;
};

export const checkDraw = (field: FieldData): boolean => {
	return field.every((cell) => cell !== CellType.empty);
};

export const getHighlight = (mark: CellType): [boolean, boolean, boolean] => {
	if (mark === CellType.x) {
		return [true, false, false];
	}
	if (mark === CellType.o) {
		return [false, false, true];
	}

	return [false, true, false];
};
