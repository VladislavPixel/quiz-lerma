import React, { useState } from 'react';
import { Skeleton } from '../common/skeleton';
import { LeftColumnAuth } from '../ui/left-column-auth';
import auxiliaryData from '../../auxiliary-data.json';
import { RightColumnAuth } from '../ui/right-column-auth';
import { navigationSignInPage } from '../../routes';
import { FormComponent } from '../common/form/form-component';


interface IDataForm extends Record<PropertyKey, string> {
	name: string;
	surname: string;
	login: string;
	password: string;
	email: string;
};

const RegistrationPage = () => {
	const [dataForm] = useState<IDataForm>({
		name: '',
		surname: '',
		login: '',
		email: '',
		password: '',
		// ДОДЕЛАТЬ КЛЮЧИ
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

					</FormComponent>
				</RightColumnAuth>
			</React.Fragment>
		</Skeleton>
	);
};

export { RegistrationPage };
