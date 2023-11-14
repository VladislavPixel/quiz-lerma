import React from 'react';
import { HeadMessageLove } from '../common/head-message-love';
import { HeadTitle } from '../common/head-title';
import { Footer } from '../common/footer';
import { Skeleton } from '../common/skeleton';

const HomePage = () => {
	return (
		<Skeleton isSidebar={true} classesParent='home-block'>
			<React.Fragment>
				<header className='home-block__header-block block-header-home'>
					<HeadMessageLove classesParent='block-header-home' />
					<HeadTitle classesParent='block-header-home' />
				</header>
				<div className='home-block__main-section section-main-home'>
					
				</div>
				<Footer classesParent='home-block' />
			</React.Fragment>
		</Skeleton>
	);
};

export { HomePage };
