import type { IMainMenuElement } from '../../type/main-menu';
import { LinkMenu } from '../common/link-menu';

interface IRightColumnAuthProps {
	classesParent: string;
	navigationIter: IMainMenuElement[];
	children: React.ReactNode;
};

const RightColumnAuth = ({ classesParent, navigationIter, children }: IRightColumnAuthProps) => {
	return (
		<div className={`${classesParent}__column column-right-auth column-auth`}>
			<div className='column-right-auth__block'>
				<div className='column-right-auth__links'>
					{navigationIter.map(({ path, title, text, icon, altIcon, _id }) => {
						return <LinkMenu key={_id} isImg={false} classesParent='column-right-auth' altIcon={altIcon} icon={icon} text={text} title={title} path={path} type='NavLink' />;
					})}
				</div>
				{children}
			</div>
		</div>
	);
};

export { RightColumnAuth };
