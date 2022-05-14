import { Wrapper } from './styled';
import { RestartIcon } from './RestartIcon';
import { observer } from 'mobx-react-lite';

type Props = {
	isOpen: boolean;
	onClick(): void;
};

export const RestartCover = observer(({ isOpen, onClick }: Props) => {
	if (isOpen == false) {
		return null;
	}

	return (
		<Wrapper onClick={onClick}>
			<RestartIcon />
		</Wrapper>
	);
});
