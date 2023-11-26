import { FC } from 'react';

interface IContentWrapperProps {
	children: React.ReactNode;
	classesParent: string;
};

const ContentWrapper: FC<IContentWrapperProps> = ({ children, classesParent }) => {
	return (
		<div className={`${classesParent}__main-section section-main-content`}>
			{children}
		</div>
	);
};

export { ContentWrapper };
