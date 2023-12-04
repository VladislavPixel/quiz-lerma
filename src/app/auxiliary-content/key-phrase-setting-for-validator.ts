import type { ISettingData } from '../type/form';
import { IS_REQUIRED, IS_MIN, IS_MAX } from '../utils/validator';

export const keyPhraseSettingForValidator: ISettingData = {
	[IS_REQUIRED]: {
		message: 'Поле "Фраза-ключ" является обязательным для заполнения.'
	},
	[IS_MIN]: {
		value: 10,
		message: 'Поле "Фраза-ключ" должно иметь не меньше - 10 символов.'
	},
	[IS_MAX]: {
		value: 40,
		message: 'Поле "Фраза-ключ" должно иметь не больше - 40 символов.'
	}
};
