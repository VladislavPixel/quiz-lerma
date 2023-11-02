import { Sidebar } from '../common/sidebar';
import { MenuMain } from '../ui/menu-main';
import auxiliaryData from '../../auxiliary-data.json';
import { HeadMessageLove } from '../common/head-message-love';

const HomePage = () => {
	return (
		<div className='block-content__home home-block'>
			<Sidebar classesParent='home-block'>
				<MenuMain classesParent='home-block' data={auxiliaryData.mainMenu} />
			</Sidebar>
			<main className='home-block__container'>
				<HeadMessageLove classesParent='home-block' />
			</main>
		</div>
	);
};

export { HomePage };
