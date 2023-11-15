interface IHeaderProps {
	children: React.ReactNode;
	classesParent: string;
};

const Header = ({ children, classesParent }: IHeaderProps) => {
	return (
		<header className={`${classesParent}__header header`}>
			{children}
		</header>
	);
};

export { Header };
