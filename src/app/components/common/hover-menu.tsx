import { FC } from 'react';

interface IHoverMenuProps {
	classesParent: string;
	children: React.ReactNode;
};

const HoverMenu: FC<IHoverMenuProps> = ({ classesParent, children }) => {
	return (
		<div className={`${classesParent}__menu-hover hover-menu`}>
			{children}
		</div>
	);
};

export { HoverMenu };
