import { Link, NavLink } from 'react-router-dom';
import { logoRoute, routesData } from '../../routes';
import type { IMainMenuElement } from '../../type/main-menu';

interface IFooterProps {
	classesParent: string;
};

const { path, icon, altIcon, text }: IMainMenuElement = logoRoute;

const Footer = ({ classesParent }: IFooterProps) => {
	const date: Date = new Date();

	const currentYear: number = date.getFullYear();

	return (
		<footer className={`${classesParent}__footer-block block-footer`}>
			<div className='block-footer__container _container'>
				<div className='block-footer__logo'>
					<Link className='block-footer__link-icon' to={path} title='Нажмите, чтобы перейти на главную страницу.'>
						<img src={icon} alt={altIcon} />
						<span>{text}</span>
					</Link>
				</div>
				<div className='block-footer__row'>
					<div className='block-footer__column'>
						<p className='block-footer__selection-information'>Нас выбирают школьники, студенты, преподаватели, сотрудники различных организаций, а также обычные пользователи, которые хотят провести время с удовольствием. «Процесс создания тестов и само тестирование могут быть увлекательными» - это и есть то, что нас всех объединяет.</p>
						<div className='block-footer__gratitude'>
							<span title='Слова благодарности'>Спасибо, что Вы с нами</span>
							<img title='Держим за Вас кулачки' src='./assets/images/icons/fist.svg' alt='Иконка кулака' />
						</div>
					</div>
					<div className='block-footer__column'>
						<div className='block-footer__menu-panel-footer footer-menu-panel'>
							{routesData.map(({ path, title, icon, altIcon, text, _id }, index: number) => {
								if (index === 0 || index === routesData.length - 1) {
									return null;
								}

								return (
									<div key={_id} className='footer-menu-panel__column'>
										<NavLink className='footer-menu-panel__link-menu' to={path} title={title}>
											<img src={icon} alt={altIcon} />
											<span>{text}</span>
										</NavLink>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className='block-footer__email'>
					<span>По всем вопросам обращайтесь на нашу почту:</span>
					<a title='Нажмите, чтобы отправить нам сообщение на почту.' href='mailto:quiz.lerma.service@yandex.ru'>quiz.lerma.service@yandex.ru</a>
				</div>
				<p className='block-footer__copyright'>©️ 2023г. - {currentYear}г. Все права защищены. Россия.</p>
				<p className='block-footer__sub-copy'>Все упомянутые торговые марки являются собственностью соответствующих владельцев. Мы не несем ответственность за случайные совпадения и различные упоминания на нашем вебсайте. Мы не преследуем цель незаконного распространения материалов, поэтому если Вы являетесь правообладателем, сообщите нам о нарушении по указанным здесь контактам.</p>
			</div>
		</footer>
	);
};

export { Footer };
