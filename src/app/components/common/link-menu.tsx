import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import type { LinkTypes } from '../../type/link';

interface ILinkMenuProps {
	classesParent: string;
	path: string;
	title: string;
	icon: string;
	altIcon: string;
	text: string;
	type: LinkTypes;
	isImg: boolean;
};

const LinkMenu: FC<ILinkMenuProps> = ({ classesParent, path, title, icon, altIcon, text, type, isImg }) => {
	return (
		type === 'NavLink' ?
		<NavLink className={`${classesParent}__link-menu`} to={path} title={title}>
			{isImg && <img className={`${classesParent}__img`} src={icon} alt={altIcon} />}
			<span className={`${classesParent}__text`}>{text}</span>
		</NavLink> :
		type === 'Link' ? 
		<Link className={`${classesParent}__link-menu`} to={path} title={title}>
			{isImg && <img className={`${classesParent}__img`} src={icon} alt={altIcon} />}
			<span className={`${classesParent}__text`}>{text}</span>
		</Link> :
		<a rel='noreferrer' target='_blank' className={`${classesParent}__link`} href={path}  title={title}>
			{isImg && <img className={`${classesParent}__img`} src={icon} alt={altIcon} />}
			<span className={`${classesParent}__text`}>{text}</span>
		</a>
	);
};

export { LinkMenu };
