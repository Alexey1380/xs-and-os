import {
	checkDraw,
	getHighlight,
	getOppositeMark,
	getWinLine,
	getNextStats,
} from '@/shared/lib/field';
import { CellType, FieldData } from '@/types';
import { makeAutoObservable } from 'mobx';
import { getIndexForAI } from '../lib';

class Store {
	private startMark = CellType.x;
	private currentMark = this.startMark;
	private isFieldDisabled = false;

	field = new Array(9).fill(CellType.empty) as FieldData;
	stats: [number, number, number] = [0, 0, 0];
	statsHighlight: [boolean, boolean, boolean] = [true, false, false];
	highlitedCells: [number, number, number] | null = null;
	isShowRestart = false;

	constructor() {
		makeAutoObservable(this);
	}

	onCellClick(index: number) {
		if (this.isFieldDisabled) {
			return;
		}
		this.setCell(index);

		if (this.currentMark === CellType.o) {
			this.AI();
		}
	}

	restart() {
		this.isShowRestart = false;
		this.field = new Array(9).fill(CellType.empty) as FieldData;
		this.highlitedCells = null;
		this.startMark = getOppositeMark(this.startMark);
		this.currentMark = this.startMark;
		this.statsHighlight = getHighlight(this.currentMark);
		if (this.currentMark === CellType.o) {
			this.AI();
		} else {
			this.isFieldDisabled = false;
		}
	}

	private setCell(index: number) {
		this.field[index] = this.currentMark;

		this.highlitedCells = getWinLine(index, this.currentMark, this.field);

		if (this.highlitedCells?.length) {
			this.stats = getNextStats(this.currentMark, this.stats);
			setTimeout(() => {
				this.isShowRestart = true;
			}, 1000);
			return;
		}

		if (checkDraw(this.field)) {
			this.stats = getNextStats(CellType.empty, this.stats);
			this.statsHighlight = getHighlight(CellType.empty);
			this.isShowRestart = true;
			return;
		}

		this.currentMark = getOppositeMark(this.currentMark);
		this.statsHighlight = getHighlight(this.currentMark);
		this.isFieldDisabled = false;
	}

	private AI() {
		this.isFieldDisabled = true;
		setTimeout(() => {
			const index = getIndexForAI(CellType.o, this.field);
			this.setCell(index);
		}, 1000);
	}
}

export const store = new Store();
