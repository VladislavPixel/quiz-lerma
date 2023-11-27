import type { IConfigData } from '../type/form';

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
		const settingsConfig = config[key];

		Object.keys(settingsConfig).forEach((keySetting): void => { // isRequired
			const result = validate(keySetting, key);

			let v = settingsConfig;

			let k = keySetting;

			if (result) {
				// errorsResult[key] = ...
			}
		});
	});

	return errorsResult;
};

export { validator };
