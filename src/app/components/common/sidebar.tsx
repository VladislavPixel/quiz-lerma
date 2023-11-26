import { FC } from 'react';

interface ISidebarProps {
	classesParent: string;
	children: React.ReactNode;
};

const Sidebar: FC<ISidebarProps> = ({ classesParent, children }) => {
	return (
		<div className={`${classesParent}__sidebar sidebar-block`}>
			{children}
		</div>
	);
};

export { Sidebar };
