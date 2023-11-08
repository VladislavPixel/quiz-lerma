interface IHoverMenuProps {
	classesParent: string;
	children: React.ReactNode;
};

const HoverMenu = ({ classesParent, children }: IHoverMenuProps) => {
	return (
		<div className={`${classesParent}__menu-hover hover-menu`}>
			{children}
		</div>
	);
};

export { HoverMenu };
