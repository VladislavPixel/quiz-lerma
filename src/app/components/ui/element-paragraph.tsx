interface IElementParagraph {
	data: string;
	classesParent: string;
};

const ElementParagraph = ({ data, classesParent }: IElementParagraph) => {
	return (
		<p className={`${classesParent}__paragraph`}>
			<img className={`${classesParent}__icon`} src='./assets/images/icons/checked.svg' alt='Иконка галочки' />
			{data}
		</p>
	);
};

export { ElementParagraph };
