interface IHeadMessageLoveProps {
	classesParent: string;
};

const HeadMessageLove = ({ classesParent }: IHeadMessageLoveProps) => {
	return (
		<div className={`${classesParent}__head-message`}>
			<span title="Послание нашим пользователям.">Из России с любовью</span>
			<img title='Сердечко от разработчиков :)' src='./assets/images/icons/heart.svg' alt='Иконка сердца.' />
		</div>
	);
};

export { HeadMessageLove };
