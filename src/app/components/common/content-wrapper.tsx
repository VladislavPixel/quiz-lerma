interface IContentWrapperProps {
	children: React.ReactNode;
	classesParent: string;
};

const ContentWrapper = ({ children, classesParent }: IContentWrapperProps) => {
	return (
		<div className={`${classesParent}__main-section section-main-content`}>
			{children}
		</div>
	);
};

export { ContentWrapper };
