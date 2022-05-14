import { observer } from 'mobx-react-lite';
import { Count, StatWrapper } from './styled';

type Props = {
	count: number;
	title: string;
};
export const Stat = observer(({ count, title }: Props) => {
	return (
		<StatWrapper>
			<div>{title}</div>
			<Count key={count}>{count}</Count>
		</StatWrapper>
	);
});
