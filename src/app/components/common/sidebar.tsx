interface ISidebarProps {
	classesParent: string;
};

const Sidebar = ({ classesParent }: ISidebarProps) => {
	return (
		<div className={`${classesParent}__sidebar sidebar-block`}>
			
		</div>
	);
};

export { Sidebar };
