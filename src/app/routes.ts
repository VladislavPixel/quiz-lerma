import type { MainMenu, IMainMenuElement, IHoverMenu } from './type/main-menu';

// ПРИ СОЗДАНИИ НОВЫХ ПУТЕЙ И ДОБАВЛЕНИИ ИХ В ПРИЛОЖЕНИЕ НУЖНО НЕ ЗАБЫВАТЬ ДОБАВЛЯТЬ НОВЫЙ ПУТЬ В ЭТОТ МАССИВ
// ПЕРВЫМИ В МАССИВЕ ИДУТ НАИБОЛЕЕ КОНКРЕТИЗИРОВАННЫЕ МАРШРУТЫ, ЭТО ДЕЛАЕТСЯ ДЛЯ КОРРЕКТНОЙ РАБОТЫ Navigation, КОГДА ОН ДЕЛАЕТ ВОЗВРАТ НАЗАД
export const allPathsRouter = [
	'/create-test',
	'/search',
	'/tests',
	'/rating',
	'/about-us',
	'/news-from-developers',
	'/merch-box',
	'/registration',
	'/sign-in',
	'/password-recovery',
	'/'
];

export const createRoute: IMainMenuElement = {
	_id: 66,
	text: 'Создать',
	path: '/create-test',
	icon: './assets/images/icons/plus.svg',
	altIcon: 'Иконка страницы с созданием тестов - плюсик в круге.',
	title: 'Нажмите, чтобы перейти на страницу создания тестов/заданий.'
};

export const socialNetworkIterable: IMainMenuElement[] = [
	{ _id: 100, path: '#discord', text: 'Discord', altIcon: 'Иконка социальной сети - Discord.', icon: './assets/images/icons/social-network-icons/discord.svg', title: 'Нажмите, чтобы перейти в нашу группу discord.' },
	{ _id: 101, path: '#dzen', text: 'Дзен', altIcon: 'Иконка социальной сети - Дзен.', icon: './assets/images/icons/social-network-icons/yandex-zen.svg', title: 'Нажмите, чтобы перейти на наш канал Дзен.' },
	{ _id: 102, path: '#telegram', text: 'Telegram', altIcon: 'Иконка социальной сети - Telegram.', icon: './assets/images/icons/social-network-icons/telegram.svg', title: 'Нажмите, чтобы перейти в нашу группу Telegram.' }
];

export const logoRoute: IMainMenuElement = {
	_id: 11,
	text: 'QuizLerma',
	path: '/',
	icon: './assets/images/icons/magic-hat-v.svg',
	altIcon: 'Иконка сервиса - QuizLerma: волшебная шляпа фиолетового цвета.',
	title: 'Нажмите, чтобы перейти на главную страницу или воспользуйтесь выпадающим меню.',
	hoverMenu: {
		title: 'Наши соцсети:',
		data: socialNetworkIterable
	}
};

const registrationRoute: IMainMenuElement = { _id: 200, text: 'Регистрация', path: '/registration', icon: './assets/images/icons/registration.svg', altIcon: 'Иконка регистрации - лист бумаги с пунктами и карандаш.', title: 'Нажмите, чтобы перейти на страницу регистрации.' };

const signInRoute: IMainMenuElement = { _id: 201, text: 'Войти', path: '/sign-in', icon: './assets/images/icons/user-sign-in.svg', altIcon: 'Иконка войти на сайт - пользователь и стрелка, символизирующая вход в систему.', title: 'Нажмите, чтобы перейти на страницу входа.' };

const passwordRecoveryRouter: IMainMenuElement = { _id: 202, text: 'Восстановление', path: '/password-recovery', icon: './assets/images/icons/user-sign-in.svg', altIcon: 'Иконка войти на сайт - пользователь и стрелка, символизирующая вход в систему.', title: 'Нажмите, чтобы перейти на страницу восстановления пароля.' };

export const navigationSignInPage: IMainMenuElement[] = [ signInRoute, registrationRoute ];

export const navigationPassowrdRecovery: IMainMenuElement[] = [ passwordRecoveryRouter, signInRoute, registrationRoute ];

export const hoverMenuDataForAuth: IHoverMenu = {
	title: 'У Вас нет учетной записи?',
	data: [
		registrationRoute,
		signInRoute
	]
};

export const authRoute: IMainMenuElement = {
	_id: 100,
	text: 'Авторизация',
	path: '/sign-in',
	icon: './assets/images/icons/user.svg',
	altIcon: 'Иконка пользователя.',
	title: 'Нажмите, чтобы перейти на страницу входа или воспользуйтесь выпадающим меню.',
	hoverMenu: hoverMenuDataForAuth
};

const routesData: MainMenu = [
	logoRoute,
	{ _id: 22, text: 'Поиск', path: '/search', icon: './assets/images/icons/search.svg', altIcon: 'Иконка поиска - лупа.', title: 'Нажмите, чтобы перейти на страницу поиска по сайту.' },
	{ _id: 33, text: 'Главная', path: '/', icon: './assets/images/icons/home.svg', altIcon: 'Иконка домашней страницы - домик.', title: 'Нажмите, чтобы перейти на главную страницу.' },
	{ _id: 44, text: 'Тесты / Задания', path: '/tests', icon: './assets/images/icons/tests.svg', altIcon: 'Иконка страницы с тестами - тестовый лист.', title: 'Нажмите, чтобы перейти на страницу с тестами/заданиями.' },
	{ _id: 55, text: 'Рейтинг', path: '/rating', icon: './assets/images/icons/star.svg', altIcon: 'Иконка страницы с рейтингами - звезда.', title: 'Нажмите, чтобы перейти на страницу с рейтингом.' },
	createRoute,
	{ _id: 77, text: 'О нас', path: '/about-us', icon: './assets/images/icons/feather.svg', altIcon: 'Иконка страницы с информацией о нас - перо, которое пишет.', title: 'Нажмите, чтобы перейти на страницу информации о нас.' },
	{ _id: 88, text: 'Новости разработчиков', path: '/news-from-developers', icon: './assets/images/icons/developer.svg', altIcon: 'Иконка страницы с новостями от разработчиков - разработчик в гарнитуре VR.', title: 'Нажмите, чтобы перейти на страницу новостей от разработчиков.' },
	{ _id: 99, text: 'Мерч', path: '/merch-box', icon: './assets/images/icons/magic-box.svg', altIcon: 'Иконка страницы с мерчем QuizLerma - коробка с магией.', title: 'Нажмите, чтобы перейти на страницу, где есть возможность приобрести мерч QuizLerma.' },
	authRoute
];

export { routesData };
