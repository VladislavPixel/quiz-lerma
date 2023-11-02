import { Sidebar } from '../common/sidebar';
import { MenuMain } from '../ui/menu-main';
import auxiliaryData from '../../auxiliary-data.json';

const HomePage = () => {
	return (
		<div className='block-content__home home-block'>
			<Sidebar classesParent='home-block'>
				<MenuMain classesParent='home-block' data={auxiliaryData.mainMenu} />
			</Sidebar>
			<main className='home-block__container'>

			</main>
		</div>
	);
};

export { HomePage };
