export interface IMainMenuElement {
	_id: number;
	text: string;
	path: string;
	icon: string;
	altIcon: string;
	title: string;
};

export type MainMenu = IMainMenuElement[];
