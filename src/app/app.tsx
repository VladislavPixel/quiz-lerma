import './scss/style.scss';
import { Routes, Route } from 'react-router-dom';
import { Home } from './layots/home';

const App = () => {
	return (
		<div className='wrapper'>
			<div className='wrapper__content block-content'>
				<Routes>
					<Route path='/' element={<Home />} />
				</Routes>
			</div>
		</div>
	);
}

export { App };
