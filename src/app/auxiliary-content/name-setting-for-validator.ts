import type { ISettingData } from '../type/form';
import { IS_REQUIRED } from '../utils/validator';

export const nameSettingForValidator: ISettingData = {
	[IS_REQUIRED]: {
		message: 'Поле "Имя" является обязательным для заполнения.'
	}
};