import type { ISettingData } from '../type/form';
import { IS_REQUIRED, IS_MAX } from '../utils/validator';

export const aboutMeSettingForValidator: ISettingData = {
	[IS_REQUIRED]: {
		message: 'Поле "О себе кратко" является обязательным для заполнения.'
	},
	[IS_MAX]: {
		value: 100,
		message: 'Поле "О себе кратко" должно иметь не больше - 100 символов.'
	}
};
