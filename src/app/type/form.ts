export interface IDataPropsChangeForm {
	key: string;
	value: string;
};

export interface ISettingData {
	isRequired?: {
		message: string;
	}
};

export interface IConfigData {
	[key: PropertyKey]: ISettingData;
};
