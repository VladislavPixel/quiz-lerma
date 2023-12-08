import React, { FC, useState } from 'react';
import { Skeleton } from '../common/skeleton';
import { Header } from '../common/header';
import { HeadMessageLove } from '../common/head-message-love';
import { ContentWrapper } from '../common/content-wrapper';
import { Footer } from '../common/footer';
import { PrivacyRulesContent } from '../ui/privacy-rules-content';
import type { AuxSettingToggle } from '../../type/privacy-policy-rules-data';
import { serviceRulesContentConfig } from '../../auxiliary-content/service-rules-content-config';

const ServiceRulesPage: FC = () => {
	const [dataToggle, setDataToggle] = useState<AuxSettingToggle>({});

	const handlerUpdateDataToggle = (id: string): void => {
		setDataToggle((prevState) => {
			return ({
				...prevState,
				[id]: {
					isActive: dataToggle[id] && dataToggle[id].isActive ? false : dataToggle[id] && !dataToggle[id].isActive ? true : !dataToggle[id] ? true : false
				}
			});
		});
	};

	return (
		<Skeleton isSidebar={true} classesParent='service-rules'>
			<React.Fragment>
				<Header classesParent='service-rules'>
					<HeadMessageLove classesParent='header' />
				</Header>
				<ContentWrapper classesParent='service-rules'>
					<PrivacyRulesContent {...serviceRulesContentConfig} callbackForUpdateToggle={handlerUpdateDataToggle} settingToggle={dataToggle} />
				</ContentWrapper>
				<Footer classesParent='service-rules' />
			</React.Fragment>
		</Skeleton>
	);
};

export { ServiceRulesPage };
