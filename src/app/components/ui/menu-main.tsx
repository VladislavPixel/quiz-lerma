import type { MainMenu, IMainMenuElement } from '../../type/main-menu';
import { NavLink } from 'react-router-dom';

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
								<NavLink title={title} className={'navbar-main__link' + (index === 0 ? ' big' : '') + (index !== 0 ? ' selectable' : '')} to={path}>
									<img src={icon} alt={altIcon} className='navbar-main__icon' />
									<span className='navbar-main__text'>{text}</span>
								</NavLink>
							</li>
						);
					})}
				</ul>
			</div>
			<div className='navbar-main__footer'>
				<NavLink title={lastElement.title} className='navbar-main__link selectable' to={lastElement.path}>
					<img src={lastElement.icon} alt={lastElement.altIcon} className='navbar-main__icon' />
					<span className='navbar-main__text'>{lastElement.text}</span>
				</NavLink>
			</div>
		</nav>
	);
}

export { MenuMain };
