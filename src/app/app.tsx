import './scss/style.scss';
import { Routes, Route } from 'react-router-dom';
import { Home } from './layots/home';
import { SignIn } from './layots/sign-in';
import { Registration } from './layots/registration';
import { NotFound } from './layots/not-found';

const App = () => {
	return (
		<div className='wrapper'>
			<div className='wrapper__content block-content'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/sign-in' element={<SignIn />} />
					<Route path='/registration' element={<Registration />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export { App };
