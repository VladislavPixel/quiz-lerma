import type { IMainMenuElement } from './main-menu';

export interface ISettingInsertElement {
	data: IMainMenuElement;
	type: string;
};

export interface IElementPrivacyPolicy {
	_id: string;
	text?: string;
	insertElement?: ISettingInsertElement;
	title?: string;
	childrens?: IElementPrivacyPolicy[];
};

export type IPrivacyPolicyRulesData = IElementPrivacyPolicy[];
