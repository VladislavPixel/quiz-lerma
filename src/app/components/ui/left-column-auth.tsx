import { FC } from 'react';
import type { IContentAuthPageData } from '../../type/content-auth-page';
import { ElementParagraph } from './element-paragraph';

type ILeftColumnAuthProps =  {
	classesParent: string;
} & IContentAuthPageData;

const LeftColumnAuth: FC<ILeftColumnAuthProps> = ({ title, titleHover, subTitle, iconName, altIcon, points, classesParent }) => {
	const isParagraphs = points && points.length !== 0;

	return (
		<div className={`${classesParent}__column column-left-auth column-auth`}>
			<div title={titleHover} className='column-left-auth__block'>
				<img className='column-left-auth__img' src={`./assets/images/icons/${iconName}`} alt={altIcon} />
				<h2 className='column-left-auth__title'>{title}</h2>
				<p className='column-left-auth__sub-title'>{subTitle}</p>
				{
					isParagraphs &&
					<div className='column-left-auth__paragraphs'>
						{points.map((text: string, index: number) => {
							return <ElementParagraph classesParent='column-left-auth' key={index} data={text} />;
						})}
					</div>
				}
			</div>
		</div>
	);
};

export { LeftColumnAuth };
