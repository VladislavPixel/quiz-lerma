import type { MainMenu, IMainMenuElement } from '../../type/main-menu';
import { LinkMenu } from '../common/link-menu';

interface IMenuMainProps {
	classesParent: string;
	data: MainMenu;
};

const MenuMain = ({ classesParent, data }: IMenuMainProps) => {
	const lastElement = data[data.length - 1];

	return (
		<nav className={`${classesParent}__navbar navbar-main`}>
			<div className='navbar-main__head-block'>
				<ul className='navbar-main__list'>
					{data.map(({ text, path, icon, altIcon, title, _id }: IMainMenuElement, index: number) => {
						if (index === data.length - 1) {
							return null;
						}

						return (
							<li key={_id} className='navbar-main__element'>
								<LinkMenu classesParent={(index === 0 ? 'big ' : '') + (index !== 0 ? 'selectable ' : '') + 'navbar-main'} title={title} path={path} icon={icon} altIcon={altIcon} text={text} type='NavLink' />
							</li>
						);
					})}
				</ul>
			</div>
			<div className='navbar-main__footer'>
				<LinkMenu path={lastElement.path} title={lastElement.title} classesParent='selectable navbar-main' icon={lastElement.icon} altIcon={lastElement.altIcon} text={lastElement.text} type='NavLink' />
			</div>
		</nav>
	);
}

export { MenuMain };
