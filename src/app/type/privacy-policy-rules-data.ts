import type { IMainMenuElement } from './main-menu';
import type { LinkTypes } from './link';

export interface ISettingInsertElement {
	data: IMainMenuElement;
	type: LinkTypes;
};

export interface IElementPrivacyPolicy {
	_id: string;
	text?: string;
	insertElement?: ISettingInsertElement;
	title?: string;
	childrens?: IElementPrivacyPolicy[];
	toggle?: { isActive: boolean, title: string };
};

export type AuxSettingToggle = Record<string, { isActive: boolean }>;

export type IPrivacyPolicyRulesData = IElementPrivacyPolicy[];

export interface IServiceRulesContentConfig {
	classesParent: string;
	title: string;
	iconImg: string;
	altImg: string;
	dataForRendering: IPrivacyPolicyRulesData;
};
