import type { IConfigData } from '../type/form';
import { KEY_PASSWORD, repeatPasswordSettingForValidator } from './repeat-password-setting-for-validator';
import { nameSettingForValidator } from './name-setting-for-validator';
import { surnameSettingForValidator } from './surname-setting-for-validator';
import { loginSettingForValidator } from './login-setting-for-validator';
import { emailSettingForValidator } from './email-setting-for-validator';
import { passwordSettingForValidator } from './password-setting-for-validator';
import { keyPhraseSettingForValidator } from './key-phrase-setting-for-validator';
import { aboutMeSettingForValidator } from './about-me-setting-for-validator';
import { userAgreementSettingForValidator } from './user-agreement-setting-for-validator';

export const registrationFormConfig: IConfigData = {
	name: nameSettingForValidator,
	surname: surnameSettingForValidator,
	login: loginSettingForValidator,
	email: emailSettingForValidator,
	[KEY_PASSWORD]: passwordSettingForValidator,
	repeatPassword: repeatPasswordSettingForValidator,
	keyPhrase: keyPhraseSettingForValidator,
	aboutMe: aboutMeSettingForValidator,
	userAgreement: userAgreementSettingForValidator
};
