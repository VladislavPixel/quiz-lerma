import { FC } from 'react';

interface IElementParagraph {
	data: string;
	classesParent: string;
};

const ElementParagraph: FC<IElementParagraph> = ({ data, classesParent }) => {
	return (
		<p className={`${classesParent}__paragraph`}>
			<img className={`${classesParent}__icon`} src='./assets/images/icons/checked.svg' alt='Иконка галочки' />
			{data}
		</p>
	);
};

export { ElementParagraph };
