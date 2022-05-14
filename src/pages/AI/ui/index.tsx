import { Field } from '@/shared/ui/Field';
import { GameLayout } from '@/shared/ui/GameLayout';
import { RestartCover } from '@/shared/ui/RestartCover';
import { Stats } from '@/shared/ui/Stats';
import { observer } from 'mobx-react-lite';
import { store } from '../model';

const titles = ['Player(X)', 'Draw', 'AI(O)'] as const;

export const AI = observer(() => {
	return (
		<GameLayout>
			<>
				<div style={{ position: 'relative' }}>
					<Field
						cells={store.field}
						onCellClick={store.onCellClick.bind(store)}
						isHide={store.isShowRestart}
						highlited={store.highlitedCells}
					/>
					<RestartCover
						isOpen={store.isShowRestart}
						onClick={store.restart.bind(store)}
					/>
				</div>
				<Stats
					statistics={store.stats}
					highlightInfo={store.statsHighlight}
					titles={titles}
				/>
			</>
		</GameLayout>
	);
});
