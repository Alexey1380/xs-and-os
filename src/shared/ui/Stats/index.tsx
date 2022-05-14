import { observer } from 'mobx-react-lite';
import { Stat } from './Stat';
import { Wrapper } from './styled';

type Props = {
	titles: readonly [string, string, string];
	statistics: readonly [number, number, number];
	highlightInfo: readonly [boolean, boolean, boolean];
};

export const Stats = observer(({ statistics, highlightInfo, titles }: Props) => {
	return (
		<Wrapper>
			{titles.map((title, i) => {
				return (
					<div
						key={title}
						style={{ opacity: highlightInfo[i] ? 1 : '.3' }}
					>
						<Stat
							title={title}
							key={i}
							count={statistics[i] as number}
						/>
					</div>
				);
			})}
		</Wrapper>
	);
});
