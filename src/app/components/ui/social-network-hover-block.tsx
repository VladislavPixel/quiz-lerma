import type { IMainMenuElement } from '../../type/main-menu';
import { LinkMenu } from "../common/link-menu";

interface ISocialNetworkHoverBlockProps {
	title: string;
	data: IMainMenuElement[];
};

const SocialNetworkHoverBlock = ({ title, data }: ISocialNetworkHoverBlockProps) => {
	return (
		<div className='hover-block-social-network'>
			<div className='hover-block-social-network__title'>{title}</div>
			<div className='hover-block-social-network__container-row'>
				{data.map(({ _id, path, text, altIcon, icon, title }: IMainMenuElement) => {
					return <LinkMenu isImg={true} classesParent='hover-block-social-network' key={_id} type='a:href' icon={icon} altIcon={altIcon} text={text} path={path} title={title} />;
				})}
			</div>
		</div>
	);
};

export { SocialNetworkHoverBlock };
