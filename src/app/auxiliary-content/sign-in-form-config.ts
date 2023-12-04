import type { IConfigData } from '../type/form';
import { loginSettingForValidator } from './login-setting-for-validator';
import { passwordSettingForValidator } from './password-setting-for-validator';

export const signInFormConfig: IConfigData = {
	login: loginSettingForValidator,
	password: passwordSettingForValidator
};
