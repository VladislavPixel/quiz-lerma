import type { IMainMenuElement } from '../../type/main-menu';

interface IRightColumnAuthProps {
	classesParent: string;
	navigationIter: IMainMenuElement[];
	children: React.ReactNode;
};

const RightColumnAuth = ({ classesParent, navigationIter }: IRightColumnAuthProps) => {
	return (
		<div className={`${classesParent}__column column-right-auth`}>
			<div className='column-right-auth__block'>

			</div>
		</div>
	);
};

export { RightColumnAuth };
