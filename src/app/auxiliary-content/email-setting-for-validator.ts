import type { ISettingData } from '../type/form';
import { IS_REQUIRED, IS_EMAIL } from '../utils/validator';

export const emailSettingForValidator: ISettingData = {
	[IS_REQUIRED]: {
		message: 'Поле "Почта" является обязательным для заполнения.'
	},
	[IS_EMAIL]: {
		message: 'Поле "Почта" должно быть установленной схемы - [test]@[test].[test]'
	}
};