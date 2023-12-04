import React, { useState, FC } from 'react';
import { Skeleton } from '../common/skeleton';
import { LeftColumnAuth } from '../ui/left-column-auth';
import { RightColumnAuth } from '../ui/right-column-auth';
import auxiliaryData from '../../auxiliary-data.json';
import { navigationPassowrdRecovery } from '../../routes';
import { FormComponent } from '../common/form/form-component';
import { TextField } from '../common/form/text-field';
import { HrElement } from '../common/hr-element';
import { MessageSmall } from '../common/message-small';
import { accountRecoveryFormConfig } from '../../auxiliary-content/account-recovery-form-config';

interface IDataForm extends Record<PropertyKey, string> {
	email: string;
	keyPhrase: string;
};

const AccountRecoveryPage: FC = () => {
	const [dataForm] = useState<IDataForm>({
		email: '',
		keyPhrase: ''
	});

	const handlerSubmit = (result: IDataForm): void => {
		console.log(result, "Результат, который пришел из формы");
	};

	return (
		<Skeleton isSidebar={true} classesParent='account-recovery'>
			<React.Fragment>
				<LeftColumnAuth {...auxiliaryData.accountRecoveryPage} classesParent='account-recovery' />
				<RightColumnAuth navigationIter={navigationPassowrdRecovery} classesParent='account-recovery'>
					<FormComponent configData={accountRecoveryFormConfig} onSubmit={handlerSubmit} data={dataForm} classesParent='account-recovery'>
						<TextField placeholder='Укажите "почту"' name='email' label='Почта:' iconName='email.svg' />
						<TextField placeholder='Укажите "фразу-ключ"' name='keyPhrase' label='Фраза-ключ для восстановления уч. записи:' iconName='key.svg' />
						<MessageSmall typeElement='skip' text='Вам требуется заполнить все поля сверху, после чего нажать кнопку. Новый пароль появится прямо на этом месте, если что-то пойдет не так, напишите нам на почту, которая указана внизу на главной странице.' />
						<HrElement isShow={true} typeElement='skip' />
						<button title='Нажмите, чтобы отправить данные на восстановление пароля.' className='btn button-purple'>Выслать новый пароль</button>
					</FormComponent>
				</RightColumnAuth>
			</React.Fragment>
		</Skeleton>
	);
};

export { AccountRecoveryPage };
