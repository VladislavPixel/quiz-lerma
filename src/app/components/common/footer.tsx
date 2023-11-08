import { logoRoute, routesData } from '../../routes';
import type { IMainMenuElement } from '../../type/main-menu';
import { LinkMenu } from './link-menu';
import { Link } from 'react-router-dom';
import { socialNetworkIterable } from '../../routes';

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
					<LinkMenu classesParent='block-footer' icon={icon} altIcon={altIcon} text={text} path={path} title='Нажмите, чтобы перейти на главную страницу.' type='Link' />
				</div>
				<div className='block-footer__row'>
					<div className='block-footer__column'>
						<p title='Нас выбирают' className='block-footer__selection-information'>Нас выбирают школьники, студенты, преподаватели, сотрудники различных организаций, а также обычные пользователи, которые хотят провести время с удовольствием. «Процесс создания тестов и само тестирование могут быть увлекательными» - это и есть то, что нас всех объединяет.</p>
						<div className='block-footer__gratitude'>
							<span title='Слова благодарности'>- Спасибо, что Вы с нами</span>
							<img title='Держим за Вас кулачки' src='./assets/images/icons/fist.svg' alt='Иконка кулака' />
						</div>
					</div>
					<div className='block-footer__column'>
						<div className='block-footer__menu-panel-footer footer-menu-panel'>
							{routesData.map(({ path, title, icon, altIcon, text, _id }: IMainMenuElement, index: number) => {
								if (index === 0 || index === routesData.length - 1) {
									return null;
								}

								return <LinkMenu key={_id} classesParent='footer-menu-panel' path={path} title={title} icon={icon} altIcon={altIcon} text={text} type='NavLink' />;
							})}
						</div>
						<div title='Подписывайтесь)' className='block-footer__social-network social-network-block'>
							<div className='social-network-block__title'>Наши социальные сети:</div>
							<div className='social-network-block__list'>
								{socialNetworkIterable.map(({ _id, path, altIcon, icon, title, text }: IMainMenuElement) => {
									return <LinkMenu classesParent='social-network-block' key={_id} type='a:href' title={title} path={path} icon={icon} altIcon={altIcon} text={text} />;
								})}
							</div>
						</div>
						<div className='block-footer__advertisement advertisement-footer'>
							<img title='Наш сервис является популярным. Вы сможете протрубить на весь интернет о себе.' className='advertisement-footer__icon' src='./assets/images/icons/mouthpiece.svg' alt='Иконка рупора.' />
							<span title='На случай, если вы хотите с нами сотрудничать.' className='advertisement-footer__text'>Реклама на этом сайте:</span>
							<Link className='advertisement-footer__link' to='/advertisement' title='Нажмите, чтобы перейти на страницу рекламы и ознакомиться с нашими условиями.'>здесь!</Link>
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
