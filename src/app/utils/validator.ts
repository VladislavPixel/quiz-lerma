import type { IConfigData, ISettingData } from '../type/form';

export const IS_REQUIRED = 'isRequired';

function validator<T extends Record<PropertyKey, string>>(config: IConfigData, data: T) {
	let errorsResult: Record<PropertyKey, string> = {};

	function validate(nameSetting: string, dataKey: string): boolean {
		const value = data[dataKey];

		let isErr = false;

		switch(nameSetting) {
			case IS_REQUIRED:
				isErr = value.length === 0;
			break;
			default:
				throw new Error('An unexpected validation setup rule was received...');
		}

		return isErr;
	};

	Object.keys(config).forEach((key: string): void => { // login  name  password  surname
		const settingsConfig: ISettingData = config[key];

		const arrKeysSettingsConfig = Object.keys(settingsConfig) as (keyof ISettingData)[];

		arrKeysSettingsConfig.forEach((keySetting): void => { // isRequired  max  min
			const result = validate(keySetting, key);

			if (result) {
				const message = settingsConfig[keySetting]?.message || '';

				if (message) {
					errorsResult[key] = message;
				}
			}
		});
	});

	return errorsResult;
};

export { validator };