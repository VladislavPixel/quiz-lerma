import type { IConfigData } from '../type/form';
import { loginSettingForValidator } from './login-setting-for-validator';
import { passwordSettingForValidator } from './password-setting-for-validator';
import { KEY_PASSWORD } from './repeat-password-setting-for-validator';

export const signInFormConfig: IConfigData = {
	login: loginSettingForValidator,
	[KEY_PASSWORD]: passwordSettingForValidator
};
