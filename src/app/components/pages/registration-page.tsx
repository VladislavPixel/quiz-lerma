import React from 'react';
import { Skeleton } from '../common/skeleton';
import { LeftColumnAuth } from '../ui/left-column-auth';
import auxiliaryData from '../../auxiliary-data.json';
import { RightColumnAuth } from '../ui/right-column-auth';
import { navigationSignInPage } from '../../routes';

const RegistrationPage = () => {
	return (
		<Skeleton isSidebar={true} classesParent='registration'>
			<React.Fragment>
				<LeftColumnAuth {...auxiliaryData.registrationPage} classesParent='registration' />
				<RightColumnAuth navigationIter={navigationSignInPage} classesParent='registration'>
					
				</RightColumnAuth>
			</React.Fragment>
		</Skeleton>
	);
};

export { RegistrationPage };
