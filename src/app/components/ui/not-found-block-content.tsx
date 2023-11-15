import { Btn } from '../common/btn';
import { HrElement } from '../common/hr-element';
import { useNavigate, useLocation } from 'react-router-dom';

const NotFoundBlockContent = () => {
	const navigate = useNavigate();

	console.log(useLocation(), "Локация");

	const handlerBackClick = (): void => {
		console.log("Назад");
	};

	const handlerToMainPage = (): void => {
		navigate('/');
	};

	return (
		<div className='not-found__block'>
			<div className='not-found__column'>
				<p className='not-found__message-number'>
					<span>4</span>0<span>4</span>
				</p>
			</div>
			<div className='not-found__column'>
				<img className='not-found__img' src='./assets/images/icons/witch.svg' alt='Иконка ведьмы, которая летит на метле.' />
				<h2 className='not-found__title'>Страница не найдена</h2>
				<p className='not-found__sub-title'>Возможно такая страница на нашем сервисе появится позже, но пока что она не существует. Предлагаем Вам воспользоваться одной из кнопок, которые расположены ниже.</p>
				<HrElement isShow={true} />
				<div className='not-found__container-btn'>
					<Btn onCb={handlerBackClick} title='Нажмите на эту кнопку, чтобы вернуться на предыдущую страницу.' classes='not-found__btn button-purple' typeBtn='button'>Вернуться назад</Btn>
					<Btn onCb={handlerToMainPage} title='Нажмите на эту кнопку, чтобы перейти на главную страницу.' classes='not-found__btn button-purple-white' typeBtn='button'>На главную</Btn>
				</div>
			</div>
			<img className='not-found__cat-element' src='./assets/images/icons/cat.svg' alt='Иконка мордочки вредного кота.' />
		</div>
	);
};

export { NotFoundBlockContent };
