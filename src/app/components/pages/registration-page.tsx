import React, { useState, FC } from 'react';
import { Skeleton } from '../common/skeleton';
import { LeftColumnAuth } from '../ui/left-column-auth';
import auxiliaryData from '../../auxiliary-data.json';
import { RightColumnAuth } from '../ui/right-column-auth';
import { navigationSignInPage } from '../../routes';
import { FormComponent } from '../common/form/form-component';
import { TextField } from '../common/form/text-field';
import { HrElement } from '../common/hr-element';
import { CheckboxField } from '../common/form/checkbox-field';


interface IDataForm extends Record<PropertyKey, string | boolean> {
	name: string;
	surname: string;
	login: string;
	email: string;
	password: string;
	repeatPassword: string;
	keyPhrase: string;
	aboutMe: string
	userAgreement: boolean;
};

const RegistrationPage: FC = () => {
	const [dataForm] = useState<IDataForm>({
		name: '',
		surname: '',
		login: '',
		email: '',
		password: '',
		repeatPassword: '',
		keyPhrase: '',
		aboutMe: '',
		userAgreement: false
	});

	const handlerSubmit = (result: IDataForm): void => {
		console.log(result, "Результат, который пришел из формы");
	};

	return (
		<Skeleton isSidebar={true} classesParent='registration'>
			<React.Fragment>
				<LeftColumnAuth {...auxiliaryData.registrationPage} classesParent='registration' />
				<RightColumnAuth navigationIter={navigationSignInPage} classesParent='registration'>
					<FormComponent onSubmit={handlerSubmit} data={dataForm} classesParent='registration'>
						<TextField placeholder='Укажите *имя*' name='name' label='Имя:' iconName='name.svg' />
						<TextField placeholder='Укажите *фамилию*' name='surname' label='Фамилия:' iconName='surname.svg' />
						<TextField placeholder='Укажите *логин*' name='login' label='Логин:' iconName='login.svg' />
						<TextField placeholder='Укажите *почту*' name='email' label='Почта:' iconName='email.svg' />
						<TextField placeholder='Укажите *пароль*' name='password' label='Пароль:' iconName='password.svg' type='password' />
						<TextField placeholder='*Пароль* для сверки' name='repeatPassword' label='Повторите пароль:' iconName='repeat-password.svg' type='password' />
						<TextField placeholder='Укажите *фразу-ключ*' name='keyPhrase' label='Фраза-ключ для восстановления уч. записи (важно):' iconName='key.svg' />
						<TextField placeholder='Укажите *о себе*' name='aboutMe' label='О себе кратко:' iconName='about-me.svg' />
						<CheckboxField />
						<HrElement isShow={true} typeElement='skip' />
						<button title='Нажмите, чтобы отправить данные на регистрацию.' className='btn button-purple'>Зарегистрироваться</button>
					</FormComponent>
				</RightColumnAuth>
			</React.Fragment>
		</Skeleton>
	);
};

export { RegistrationPage };
