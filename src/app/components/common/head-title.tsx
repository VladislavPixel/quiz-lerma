import { NavLink } from 'react-router-dom';
import { createRoute } from '../../routes';
import type { IMainMenuElement } from "../../type/main-menu";

interface IHeadTitleProps {
	classesParent: string;
};

const { path, title }: IMainMenuElement = createRoute;

const HeadTitle = ({ classesParent }: IHeadTitleProps) => {
	return (
		<div title='К вашему сведению :)' className={`${classesParent}__head-title title-head-block`}>
			<h1 className='title-head-block__name'>Тесты на любой вкус!</h1>
			<p className='title-head-block__paragraph'>Мы создали для Вас уникальную площадку, где любой человек сможет найти тесты по интересам или создать свои. <NavLink className='title-head-block__link' title={title} to={path}>Универсальный конструктор тестов</NavLink> поможет Вам в этом.</p>
		</div>
	);
};

export { HeadTitle };
