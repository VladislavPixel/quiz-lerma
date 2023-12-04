import type { ISettingData } from '../type/form';
import { IS_REQUIRED } from '../utils/validator';

export const surnameSettingForValidator: ISettingData = {
	[IS_REQUIRED]: {
		message: 'Поле "Фамилия" является обязательным для заполнения.'
	}
};
