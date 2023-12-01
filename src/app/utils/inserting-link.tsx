import React from 'react';
import { LinkMenu } from '../components/common/link-menu';
import type { ISettingInsertElement } from '../type/privacy-policy-rules-data';

const insertingLink = (classesParent: string, value: string, substr: string, config: undefined | ISettingInsertElement) => {
	if (config === undefined) {
		return value;
	}

	const arr = value.split(substr);

	if (arr.length !== 2) {
		return value;
	}

	const { type, data } = config;

	const { path, text, title, icon, altIcon } = data;

	return (
		<React.Fragment>
			{arr[0]}
			<LinkMenu classesParent={classesParent} type={type} path={path} text={text} title={title} icon={icon} altIcon={altIcon} isImg={false} />
			{arr[1]}
		</React.Fragment>
	);
};

export { insertingLink };
