import React, { FC } from 'react';
import { Skeleton } from '../common/skeleton';
import { Footer } from '../common/footer';
import { Header } from '../common/header';
import { HeadMessageLove } from '../common/head-message-love';
import { ContentWrapper } from '../common/content-wrapper';
import { PrivacyRulesContent } from '../ui/privacy-rules-content';
import { privacyPolicyContentConfig } from '../../auxiliary-content/privacy-policy-content-config';

const PrivacyPolicyPage: FC = () => {
	return (
		<Skeleton isSidebar={true} classesParent='privacy-policy'>
			<React.Fragment>
				<Header classesParent='privacy-policy'>
					<HeadMessageLove classesParent='header' />
				</Header>
				<ContentWrapper classesParent='privacy-policy'>
					<PrivacyRulesContent {...privacyPolicyContentConfig} />
				</ContentWrapper>
				<Footer classesParent='privacy-policy' />
			</React.Fragment>
		</Skeleton>
	);
};

export { PrivacyPolicyPage };
