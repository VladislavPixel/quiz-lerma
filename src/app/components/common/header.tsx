import { FC } from 'react';

interface IHeaderProps {
	children: React.ReactNode;
	classesParent: string;
};

const Header: FC<IHeaderProps> = ({ children, classesParent }) => {
	return (
		<header className={`${classesParent}__header header`}>
			{children}
		</header>
	);
};

export { Header };
