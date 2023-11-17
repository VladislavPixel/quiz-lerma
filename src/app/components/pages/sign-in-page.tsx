import React, { useState } from 'react';
import { Skeleton } from '../common/skeleton';
import { LeftColumnAuth } from '../ui/left-column-auth';
import { RightColumnAuth } from '../ui/right-column-auth';
import auxiliaryData from '../../auxiliary-data.json';
import { navigationSignInPage } from '../../routes';
import { TextField } from '../common/form/text-field';
import { FormComponent } from '../common/form/form-component';


interface CustomElementsSignIn extends HTMLFormControlsCollection {
	login: HTMLInputElement;
	password: HTMLInputElement;
};

interface CustomFormSignIn extends HTMLFormElement {
  readonly elements: CustomElementsSignIn;
}

interface IDataFormSignIn {
	login: '';
	password: '';
};

const SignInPage = () => {
	const [dataForm, setDataForm] = useState({
		login: '',
		password: ''
	});

	const handlerChangeField = (data: any) => {
		setDataForm((prevState) => ({ ...prevState, [data.key]: data.value }));
	};

	const handlerSubmit = (event: React.FormEvent<CustomFormSignIn>) => {
		event.preventDefault();

		const target = event.currentTarget.elements;

		const result = {
			login: target.login.value,
			password: target.password.value
		};

		console.log(result, "RESULT submit form sign-in");
	};

	return (
		<Skeleton isSidebar={true} classesParent='sign-in'>
			<React.Fragment>
				<LeftColumnAuth {...auxiliaryData.signInPage} classesParent='sign-in' />
				<RightColumnAuth navigationIter={navigationSignInPage} classesParent='sign-in'>
					<FormComponent onSubmit={handlerSubmit} data={dataForm} classesParent='sign-in'>
						fghfgh
						<TextField placeholder='Укажите *логин*' name='login' label='Логин:' iconName='login.svg' />
						<TextField placeholder='Укажите *пароль*' name='password' label='Пароль:' iconName='password.svg' type='password' />
						<button>Вход</button>
					</FormComponent>
					{/*<form onSubmit={handlerSubmit} className='sign-in__form'>
						<TextField value={dataForm.login} iconName='login.svg' type='text' onChange={handlerChangeField} classesParent='sign-in' placeholder='Укажите *логин*' name='login' label='Логин:' />
						<TextField value={dataForm.password} iconName='password.svg' type='password' onChange={handlerChangeField} classesParent='sign-in' placeholder='Укажите *пароль*' name='password' label='Пароль:' />
						<button type='submit' title='Нажмите, чтобы отправить данные на авторизацию.' className='sign-in__sub-btn btn button-purple'>Вход</button>
					</form>*/}
				</RightColumnAuth>
			</React.Fragment>
		</Skeleton>
	);
};

export { SignInPage };
