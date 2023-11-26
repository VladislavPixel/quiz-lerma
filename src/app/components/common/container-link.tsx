import { FC } from 'react';
import { LinkMenu } from './link-menu';

interface IContainerLinkProps {
	path: string;
	classesParent?: string;
	typeElement?: string;
	title: string;
	text: string;
	altIcon: string;
	icon: string;
};

const ContainerLink: FC<IContainerLinkProps> = ({ path, classesParent, title, text, altIcon, icon }) => {
	return (
		<div className={`${classesParent}__container-link link-container`}>
			<LinkMenu icon={icon} altIcon={altIcon} text={text} isImg={false} title={title} path={path} type='Link' classesParent={classesParent || ''} />
		</div>
	);
};

export { ContainerLink };
