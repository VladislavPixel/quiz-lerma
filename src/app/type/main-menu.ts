export interface IMainMenuElement {
	_id: number;
	text: string;
	path: string;
	icon: string;
	altIcon: string;
	title: string;
	hoverMenu?: IHoverMenu;
};

export interface IHoverMenu {
	title: string;
	data: IMainMenuElement[];
};

export type MainMenu = IMainMenuElement[];
