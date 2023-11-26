import React, { FC } from 'react';
import { HeadMessageLove } from '../common/head-message-love';
import { HeadTitle } from '../common/head-title';
import { Footer } from '../common/footer';
import { Skeleton } from '../common/skeleton';
import { Header } from '../common/header';
import { ContentWrapper } from '../common/content-wrapper';

const HomePage: FC = () => {
	return (
		<Skeleton isSidebar={true} classesParent='home-block'>
			<React.Fragment>
				<Header classesParent='home-block'>
					<HeadMessageLove classesParent='header' />
					<HeadTitle classesParent='header' />
				</Header>
				<ContentWrapper classesParent='home-block'>

				</ContentWrapper>
				<Footer classesParent='home-block' />
			</React.Fragment>
		</Skeleton>
	);
};

export { HomePage };
