import React, { FC } from 'react';
import { Skeleton } from '../common/skeleton';
import { Footer } from '../common/footer';
import { Header } from '../common/header';
import { HeadMessageLove } from '../common/head-message-love';
import { ContentWrapper } from '../common/content-wrapper';
import { NotFoundBlockContent } from '../ui/not-found-block-content';

const NotFoundPage: FC = () => {
	return (
		<Skeleton isSidebar={true} classesParent='not-found'>
			<React.Fragment>
				<Header classesParent='not-found'>
					<HeadMessageLove classesParent='header' />
				</Header>
				<ContentWrapper classesParent='not-found'>
					<NotFoundBlockContent />
				</ContentWrapper>
				<Footer classesParent='not-found' />
			</React.Fragment>
		</Skeleton>
	);
};

export { NotFoundPage };
