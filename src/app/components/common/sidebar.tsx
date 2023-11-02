interface ISidebarProps {
	classesParent: string;
	children: React.ReactNode;
};

const Sidebar = ({ classesParent, children }: ISidebarProps) => {
	return (
		<div className={`${classesParent}__sidebar sidebar-block`}>
			{children}
		</div>
	);
};

export { Sidebar };
