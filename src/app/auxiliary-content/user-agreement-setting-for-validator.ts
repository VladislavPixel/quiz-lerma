import type { ISettingData } from '../type/form';
import { IS_REQUIRED } from '../utils/validator';

export const userAgreementSettingForValidator: ISettingData = {
	[IS_REQUIRED]: {
		message: 'Поле "Пользовательское соглашение" является обязательным для заполнения.'
	}
};
