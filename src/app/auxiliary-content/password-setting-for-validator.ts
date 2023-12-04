import type { ISettingData } from '../type/form';
import { IS_REQUIRED, IS_CONTAINS_ELEMENT_IN_UPPERCASE, IS_NUM, IS_SPEC_CHAR, IS_MIN, IS_MAX } from "../utils/validator";

export const passwordSettingForValidator: ISettingData = {
	[IS_REQUIRED]: {
		message: 'Поле "Пароль" является обязательным для заполнения.'
	},
	[IS_CONTAINS_ELEMENT_IN_UPPERCASE]: {
		message: 'Поле "Пароль" должно содержать любую букву в верхнем регистре.'
	},
	[IS_NUM]: {
		message: 'Поле "Пароль" должно содержать хотя бы одну цифру.'
	},
	[IS_SPEC_CHAR]: {
		message: 'Поле "Пароль" должно содержать один из символов - [ !@#$%&* ].'
	},
	[IS_MIN]: {
		value: 9,
		message: 'Поле "Пароль" должно иметь не меньше - 9 символов.'
	},
	[IS_MAX]: {
		value: 20,
		message: 'Поле "Пароль" должно иметь не больше - 20 символов.'
	}
};
