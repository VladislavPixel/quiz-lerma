import type { ISettingData } from '../type/form';
import { IS_REQUIRED } from "../utils/validator";

export const loginSettingForValidator: ISettingData = {
	[IS_REQUIRED]: {
		message: 'Поле "Логин" является обязательным для заполнения.'
	}
};
