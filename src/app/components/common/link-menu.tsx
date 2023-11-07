import { Link, NavLink } from 'react-router-dom';

interface ILinkMenuProps {
  classesParent: string;
  path: string;
  title: string;
  icon: string;
  altIcon: string;
  text: string;
  type: 'NavLink' | 'Link';
};

const LinkMenu = ({ classesParent, path, title, icon, altIcon, text, type }: ILinkMenuProps) => {
  return (
    type === 'NavLink' ?
    <NavLink className={`${classesParent}__link-menu`} to={path} title={title}>
      <img className={`${classesParent}__img`} src={icon} alt={altIcon} />
      <span className={`${classesParent}__text`}>{text}</span>
    </NavLink> :
    <Link className={`${classesParent}__link-menu`} to={path} title={title}>
      <img className={`${classesParent}__img`} src={icon} alt={altIcon} />
      <span className={`${classesParent}__text`}>{text}</span>
    </Link>
  );
};

export { LinkMenu };
