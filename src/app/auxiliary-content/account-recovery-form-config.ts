import type { IConfigData } from '../type/form';
import { keyPhraseSettingForValidator } from './key-phrase-setting-for-validator';
import { emailSettingForValidator } from './email-setting-for-validator';

export const accountRecoveryFormConfig: IConfigData = {
	email: emailSettingForValidator,
	keyPhrase: keyPhraseSettingForValidator
};
