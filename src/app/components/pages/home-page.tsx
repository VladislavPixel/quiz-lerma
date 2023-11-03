import { Sidebar } from '../common/sidebar';
import { MenuMain } from '../ui/menu-main';
import { routesData } from "../../routes";
import { HeadMessageLove } from '../common/head-message-love';
import { HeadTitle } from '../common/head-title';
import { Footer } from '../common/footer';

const HomePage = () => {
	return (
		<div className='block-content__home home-block'>
			<Sidebar classesParent='home-block'>
				<MenuMain classesParent='home-block' data={routesData} />
			</Sidebar>
			<main className='home-block__container'>
				<header className='home-block__header-block block-header-home'>
					<HeadMessageLove classesParent='block-header-home' />
					<HeadTitle classesParent='block-header-home' />
				</header>
				<div className='home-block__main-section section-main-home'>

				</div>
				<Footer classesParent='home-block' />
			</main>
		</div>
	);
};

export { HomePage };
