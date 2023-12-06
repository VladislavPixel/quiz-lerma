import React, { useState, FC } from 'react';
import { Skeleton } from '../common/skeleton';
import { LeftColumnAuth } from '../ui/left-column-auth';
import { RightColumnAuth } from '../ui/right-column-auth';
import auxiliaryData from '../../auxiliary-data.json';
import { navigationSignInPage, PASSWORD_RECOVERY_PATH } from '../../routes';
import { TextField } from '../common/form/text-field';
import { FormComponent } from '../common/form/form-component';
import { ContainerLink } from '../common/container-link';
import { HrElement } from '../common/hr-element';
import { signInFormConfig } from '../../auxiliary-content/sign-in-form-config';
import { KEY_PASSWORD } from '../../auxiliary-content/repeat-password-setting-for-validator';

interface IDataForm extends Record<PropertyKey, string> {
	login: string;
	[KEY_PASSWORD]: string;
};

const SignInPage: FC = () => {
	const [dataForm] = useState<IDataForm>({
		login: '',
		[KEY_PASSWORD]: ''
	});

	const handlerSubmit = (result: IDataForm): void => {
		console.log(result, "Результат, который пришел из формы");
	};

	return (
		<Skeleton isSidebar={true} classesParent='sign-in'>
			<React.Fragment>
				<LeftColumnAuth {...auxiliaryData.signInPage} classesParent='sign-in' />
				<RightColumnAuth navigationIter={navigationSignInPage} classesParent='sign-in'>
					<FormComponent configData={signInFormConfig} onSubmit={handlerSubmit} data={dataForm} classesParent='sign-in'>
						<TextField placeholder='Укажите "логин"' name='login' label='Логин:' iconName='login.svg' />
						<TextField placeholder='Укажите "пароль"' name={KEY_PASSWORD} label='Пароль:' iconName='password.svg' type={KEY_PASSWORD} />
						<ContainerLink icon='./assets/images/icons/recovery-password.svg' altIcon='Иконка восстановления пароля.' text='Забыли пароль?' path={PASSWORD_RECOVERY_PATH} typeElement='skip' title='Нажмите, чтобы перейти на страницу восстановления пароля.' />
						<HrElement isShow={true} typeElement='skip' />
						<button title='Нажмите, чтобы отправить данные на авторизацию.' className='btn button-purple'>Вход</button>
					</FormComponent>
				</RightColumnAuth>
			</React.Fragment>
		</Skeleton>
	);
};

export { SignInPage };
