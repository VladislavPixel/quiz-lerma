import React, { FC } from 'react';
import { Skeleton } from '../common/skeleton';
import { Header } from '../common/header';
import { HeadMessageLove } from '../common/head-message-love';
import { ContentWrapper } from '../common/content-wrapper';
import { Footer } from '../common/footer';
import { ServiceRulesContent } from '../ui/service-rules-content';

const ServiceRulesPage: FC = () => {
	return (
		<Skeleton isSidebar={true} classesParent='service-rules'>
			<React.Fragment>
				<Header classesParent='service-rules'>
					<HeadMessageLove classesParent='header' />
				</Header>
				<ContentWrapper classesParent='service-rules'>
					<ServiceRulesContent />
				</ContentWrapper>
				<Footer classesParent='service-rules' />
			</React.Fragment>
		</Skeleton>
	);
};

export { ServiceRulesPage };
