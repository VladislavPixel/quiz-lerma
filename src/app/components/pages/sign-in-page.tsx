import React, { useState } from 'react';
import { Skeleton } from '../common/skeleton';
import { LeftColumnAuth } from '../ui/left-column-auth';
import { RightColumnAuth } from '../ui/right-column-auth';
import auxiliaryData from '../../auxiliary-data.json';
import { navigationSignInPage } from '../../routes';
import { TextField } from '../common/form/text-field';
import { FormComponent } from '../common/form/form-component';

const SignInPage = () => {
	const [dataForm] = useState({
		login: '',
		password: ''
	});

	const handlerChangeField = () => {

	};

	return (
		<Skeleton isSidebar={true} classesParent='sign-in'>
			<React.Fragment>
				<LeftColumnAuth {...auxiliaryData.signInPage} classesParent='sign-in' />
				<RightColumnAuth navigationIter={navigationSignInPage} classesParent='sign-in'>
					{/* <FormComponent data={dataForm} classesParent='sign-in'>
						<TextField placeholder='Укажите *логин*' name='login' label='Логин:' />
						<TextField placeholder='Укажите *пароль*' name='password' label='Пароль:' />
						<button>Вход</button>
					</FormComponent> */}
					<form className='sign-in__form'>
						<TextField iconName='login.svg' type='text' onChange={handlerChangeField} classesParent='sign-in' placeholder='Укажите *логин*' name='login' label='Логин:' />
						<TextField iconName='password.svg' type='password' onChange={handlerChangeField} classesParent='sign-in' placeholder='Укажите *пароль*' name='password' label='Пароль:' />
						<button title='Нажмите, чтобы отправить данные на авторизацию.' className='sign-in__sub-btn btn button-purple'>Вход</button>
					</form>
				</RightColumnAuth>
			</React.Fragment>
		</Skeleton>
	);
};

export { SignInPage };
