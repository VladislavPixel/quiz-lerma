interface IHeadMessageLoveProps {
	classesParent: string;
};

const HeadMessageLove = ({ classesParent }: IHeadMessageLoveProps) => {
	return (
		<div className={`${classesParent}__head-message`}>
			<h3 title="Послание нашим пользователям.">Из России с любовью</h3>
			<img title='Сердечко от разработчиков :)' src='./assets/images/icons/heart.svg' alt='Иконка сердца.' />
		</div>
	);
};

export { HeadMessageLove };
