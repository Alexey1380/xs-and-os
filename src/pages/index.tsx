import { Route, Routes } from 'react-router-dom';
import { AIPage } from './AI';
import { HotSeatPage } from './HotSeat';
import { MenuScreen } from './MenuScreen';
import { routes } from './routes';

export const Routing = () => (
	<Routes>
		<Route
			path={routes.main}
			element={<MenuScreen />}
		/>
		<Route
			path={routes.ai}
			element={<AIPage />}
		/>
		<Route
			path={routes.hotseat}
			element={<HotSeatPage />}
		/>
		<Route
			path={routes.network}
			element={<AIPage />}
		/>
	</Routes>
);
