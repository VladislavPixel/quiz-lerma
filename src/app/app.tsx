import './scss/style.scss';
import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './layots/home';
import { SignIn } from './layots/sign-in';
import { Registration } from './layots/registration';
import { NotFound } from './layots/not-found';
import { AccountRecovery } from './layots/account-recovery';
import { PASSWORD_RECOVERY_PATH, SIGN_IN_PATH, REGISTRATION_PATH, HOME_PATH, NOT_FOUND_PATH } from './routes';

const App: FC = () => {
	return (
		<div className='wrapper'>
			<div className='wrapper__content block-content'>
				<Routes>
					<Route path={HOME_PATH} element={<Home />} />
					<Route path={SIGN_IN_PATH} element={<SignIn />} />
					<Route path={REGISTRATION_PATH} element={<Registration />} />
					<Route path={PASSWORD_RECOVERY_PATH} element={<AccountRecovery />} />
					<Route path={NOT_FOUND_PATH} element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export { App };
