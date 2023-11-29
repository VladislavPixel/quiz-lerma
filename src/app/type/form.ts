export interface IDataPropsChangeForm {
	key: string;
	value: string;
};

export interface IMessage {
	message: string;
};

export interface ISettingData {
	isRequired?: IMessage;
};

export interface IConfigData {
	[key: PropertyKey]: ISettingData;
};
