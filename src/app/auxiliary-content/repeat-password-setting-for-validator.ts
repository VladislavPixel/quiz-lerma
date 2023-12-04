import type { ISettingData } from '../type/form';
import { IS_REQUIRED, IS_TARGET } from '../utils/validator';

export const repeatPasswordSettingForValidator: ISettingData = {
	[IS_REQUIRED]: {
		message: 'Поле "Повторите пароль" является обязательным для заполнения.'
	},
	[IS_TARGET]: {
		message: 'Поле "Повторите пароль" должно совпадать с тем, что вы ввели в поле "Пароль".',
		targetKey: 'password'
	}
};
