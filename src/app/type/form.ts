export interface IDataPropsChangeForm {
	key: string;
	value: string;
};

export interface IMessage {
	message: string;
};

export interface IValue {
	value: number;
};

export interface ITarget {
	targetKey: string;
};

export interface ISettingData {
	isRequired?: IMessage;
	isMin?: IValue & IMessage;
	isMax?: IValue & IMessage;
	isContainsElInUpper?: IMessage;
	isNum?: IMessage;
	isSpecChar?: IMessage;
	isEmail?: IMessage;
	isTarget?: IMessage & ITarget;
};

export interface IConfigData {
	[key: PropertyKey]: ISettingData;
};
