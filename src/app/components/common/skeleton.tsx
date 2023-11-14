import { Sidebar } from './sidebar';
import { MenuMain } from '../ui/menu-main';
import { routesData } from '../../routes';

interface ISkeletonProps {
	isSidebar: boolean;
	children: React.ReactNode;
	classesParent: string;
};

const Skeleton = ({ isSidebar, children, classesParent }: ISkeletonProps) => {
	const stylesForBlockContent = {
		width: '100%',
		height: '100%',
		display: 'flex'
	};

	const stylesForContainer = {
		flex: '1 1 auto',
		display: 'flex'
	};

	return (
		<div style={stylesForBlockContent} className={`block-content__${classesParent} ${classesParent}`}>
			{
				isSidebar &&
				<Sidebar classesParent={classesParent}>
					<MenuMain data={routesData} classesParent={classesParent} />
				</Sidebar>
			}
			<main style={stylesForContainer} className={`${classesParent}__container`}>
				{children}
			</main>
		</div>
	);
};

export { Skeleton };
