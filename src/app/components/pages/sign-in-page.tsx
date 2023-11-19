import React, { useState } from 'react';
import { Skeleton } from '../common/skeleton';
import { LeftColumnAuth } from '../ui/left-column-auth';
import { RightColumnAuth } from '../ui/right-column-auth';
import auxiliaryData from '../../auxiliary-data.json';
import { navigationSignInPage } from '../../routes';
import { TextField } from '../common/form/text-field';
import { FormComponent } from '../common/form/form-component';

interface IDataForm extends Record<PropertyKey, string> {
	login: string;
	password: string;
};

const SignInPage = () => {
	const [dataForm] = useState<IDataForm>({
		login: '',
		password: ''
	});

	const handlerSubmit = (result: IDataForm): void => {
		console.log(result, "Результат, который пришел из формы");
	};

	return (
		<Skeleton isSidebar={true} classesParent='sign-in'>
			<React.Fragment>
				<LeftColumnAuth {...auxiliaryData.signInPage} classesParent='sign-in' />
				<RightColumnAuth navigationIter={navigationSignInPage} classesParent='sign-in'>
					<FormComponent onSubmit={handlerSubmit} data={dataForm} classesParent='sign-in'>
						<TextField placeholder='Укажите *логин*' name='login' label='Логин:' iconName='login.svg' />
						<TextField placeholder='Укажите *пароль*' name='password' label='Пароль:' iconName='password.svg' type='password' />
						<button title='Нажмите, чтобы отправить данные на авторизацию.' className='btn button-purple'>Вход</button>
					</FormComponent>
				</RightColumnAuth>
			</React.Fragment>
		</Skeleton>
	);
};

export { SignInPage };
