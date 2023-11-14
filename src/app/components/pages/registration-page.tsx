import React from 'react';
import { Skeleton } from '../common/skeleton';
import { LeftColumnAuth } from '../ui/left-column-auth';
import auxiliaryData from '../../auxiliary-data.json';

const RegistrationPage = () => {
	return (
		<Skeleton isSidebar={true} classesParent='registration'>
			<React.Fragment>
				<LeftColumnAuth {...auxiliaryData.registrationPage} classesParent='registration' />
				<div className='registration__column'></div>
			</React.Fragment>
		</Skeleton>
	);
};

export { RegistrationPage };
