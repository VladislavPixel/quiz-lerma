import React, { useState } from 'react';
import { Skeleton } from '../common/skeleton';
import { LeftColumnAuth } from '../ui/left-column-auth';
import { RightColumnAuth } from '../ui/right-column-auth';
import auxiliaryData from '../../auxiliary-data.json';
import { navigationSignInPage } from '../../routes';
import { TextField } from '../common/form/text-field';
import { FormComponent } from '../common/form/form-component';

const SignInPage = () => {
	const [dataForm, setDataForm] = useState({
		login: '',
		password: ''
	});

  return (
		<Skeleton isSidebar={true} classesParent='sign-in'>
			<React.Fragment>
				<LeftColumnAuth {...auxiliaryData.signInPage} classesParent='sign-in' />
				<RightColumnAuth navigationIter={navigationSignInPage} classesParent='sign-in'>
					<FormComponent data={dataForm} classesParent='sign-in'>
						<TextField placeholder='Укажите *логин*' name='login' label='Логин:' />
						<TextField placeholder='Укажите *пароль*' name='password' label='Пароль:' />
						<button>Вход</button>
					</FormComponent>
				</RightColumnAuth>
			</React.Fragment>
		</Skeleton>
  );
};

export { SignInPage };
