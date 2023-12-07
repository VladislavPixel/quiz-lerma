import type { IConfigData, ISettingData } from '../type/form';

export const IS_REQUIRED = 'isRequired';
export const IS_MIN = 'isMin';
export const IS_MAX = 'isMax';
export const IS_CONTAINS_ELEMENT_IN_UPPERCASE = 'isContainsElInUpper';
export const IS_NUM = 'isNum';
export const IS_SPEC_CHAR = 'isSpecChar';
export const IS_EMAIL = 'isEmail';
export const IS_TARGET = 'isTarget';

function validator<T extends Record<PropertyKey, string>>(config: IConfigData, data: T) {
	let errorsResult: Record<PropertyKey, string> = {};

	function validate(nameSetting: keyof ISettingData, dataKey: string, currentSetting: ISettingData): boolean {
		const value: string = data[dataKey];

		let isErr: boolean = false;

		switch(nameSetting) {
			case IS_REQUIRED:
				isErr = value.length === 0;
			break;
			case IS_CONTAINS_ELEMENT_IN_UPPERCASE:
				isErr = !(/\p{Lu}/um.test(value));
			break;
			case IS_NUM:
				isErr = !(/\d+/m.test(value));
			break;
			case IS_SPEC_CHAR:
				isErr = !(/[!@#$%&*]+/m.test(value));
			break;
			case IS_EMAIL:
				isErr = !(/(.)+[@]{1,1}(.)+[.](.)+/.test(value));
			break;
			case IS_TARGET:
				const x = currentSetting[nameSetting];

				isErr = !(x && data[x.targetKey] === value);
			break;
			case IS_MIN:
				const m = currentSetting[nameSetting];

				isErr = !(m && value.length >= m.value);
			break;
			case IS_MAX:
				const z = currentSetting[nameSetting];

				isErr = !(z && value.length <= z.value); 
			break;
			default:
				throw new Error('An unexpected validation setup rule was received...');
		}

		return isErr;
	};

	Object.keys(config).forEach((key: string): void => { // login  name  password  surname  email  repeatPassword  keyPhrase  aboutMe  userAgreement
		const settingsConfig: ISettingData = config[key];

		const arrKeysSettingsConfig = Object.keys(settingsConfig) as (keyof ISettingData)[];

		arrKeysSettingsConfig.forEach((keySetting: keyof ISettingData): void => { // isRequired  isMax  isMin  isContainsElInUpper  isNum  isSpecChar  isEmail  isTarget
			const result = validate(keySetting, key, settingsConfig);

			if (result) {
				const message = settingsConfig[keySetting]?.message || '';

				if (message && !(errorsResult.hasOwnProperty(key))) {
					errorsResult[key] = message;
				}
			}
		});
	});

	return errorsResult;
};

export { validator };
