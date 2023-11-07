import type { MainMenu, IMainMenuElement } from './type/main-menu';

export const createRoute: IMainMenuElement = {
	_id: 66,
	text: 'Создать',
	path: '/create-test',
	icon: './assets/images/icons/plus.svg',
	altIcon: 'Иконка страницы с созданием тестов - плюсик в круге.',
	title: 'Нажмите, чтобы перейти на страницу создания тестов.'
};

export const logoRoute: IMainMenuElement = {
	_id: 11,
	text: 'QuizLerma',
	path: '/',
	icon: './assets/images/icons/magic-hat-v.svg',
	altIcon: 'Иконка сервиса - QuizLerma: волшебная шляпа фиолетового цвета.',
	title: 'Нажмите, чтобы перейти на главную страницу или воспользуйтесь выпадающим меню.',
	hoverMenu: {
		title: 'Наши соцсети',
		data: [
			{ _id: 100, path: '#discord', text: 'Мы присутствуем в Discord', altIcon: 'Иконка социальной сети - Discord.', icon: './assets/images/icons/social-network-icons/discord.svg', title: 'Нажмите, чтобы перейти в нашу группу discord.', type: 'a:href' },
			{ _id: 101, path: '#dzen', text: 'У нас есть канал на Дзене', altIcon: 'Иконка социальной сети - Дзен.', icon: './assets/images/icons/social-network-icons/yandex-zen.svg', title: 'Нажмите, чтобы перейти на наш канал Дзен.', type: 'a:href' },
			{ _id: 102, path: '#telegram', text: 'Вы можете найти нас в Telegram', altIcon: 'Иконка социальной сети - Telegram.', icon: './assets/images/icons/social-network-icons/telegram.svg', title: 'Нажмите, чтобы перейти в нашу группу Telegram.', type: 'a:href' }
		]
	}
};

export const authRoute: IMainMenuElement = {
	_id: 100,
	text: 'Авторизация',
	path: '/auth',
	icon: './assets/images/icons/user.svg',
	altIcon: 'Иконка пользователя.',
	title: 'Нажмите, чтобы перейти на страницу входа или воспользуйтесь выпадающим меню.',
	hoverMenu: {
		title: 'У Вас нет учетной записи?',
		data: [
			{ _id: 200, text: 'Регистрация', path: '/registration', icon: './assets/images/icons/registration.svg', altIcon: 'Иконка регистрации - лист бумаги с пунктами и карандаш.', title: 'Нажмите, чтобы перейти на страницу регистрации.', type: "route" },
			{ _id: 201, text: 'Войти', path: '/sign-in', icon: './assets/images/icons/user-sign-in.svg', altIcon: 'Иконка войти на сайт - пользователь и стрелка, символизирующая вход в систему.', title: 'Нажмите, чтобы перейти на страницу входа.', type: "route" }
		]
	}
};

const routesData: MainMenu = [
	logoRoute,
	{ _id: 22, text: 'Поиск', path: '/search', icon: './assets/images/icons/search.svg', altIcon: 'Иконка поиска - лупа.', title: 'Нажмите, чтобы перейти на страницу поиска по сайту.' },
	{ _id: 33, text: 'Главная', path: '/', icon: './assets/images/icons/home.svg', altIcon: 'Иконка домашней страницы - домик.', title: 'Нажмите, чтобы перейти на главную страницу.' },
	{ _id: 44, text: 'Тесты', path: '/tests', icon: './assets/images/icons/tests.svg', altIcon: 'Иконка страницы с тестами - тестовый лист.', title: 'Нажмите, чтобы перейти на страницу с тестами.' },
	{ _id: 55, text: 'Рейтинг', path: '/rating', icon: './assets/images/icons/star.svg', altIcon: 'Иконка страницы с рейтингами - звезда.', title: 'Нажмите, чтобы перейти на страницу с рейтингом.' },
	createRoute,
	{ _id: 77, text: 'О нас', path: '/about-us', icon: './assets/images/icons/feather.svg', altIcon: 'Иконка страницы с информацией о нас - перо, которое пишет.', title: 'Нажмите, чтобы перейти на страницу информации о нас.' },
	{ _id: 88, text: 'Новости разработчиков', path: '/news-from-developers', icon: './assets/images/icons/developer.svg', altIcon: 'Иконка страницы с новостями от разработчиков - разработчик в гарнитуре VR.', title: 'Нажмите, чтобы перейти на страницу новостей от разработчиков.' },
	{ _id: 99, text: 'Мерч', path: '/merch-box', icon: './assets/images/icons/magic-box.svg', altIcon: 'Иконка страницы с мерчем QuizLerma - коробка с магией.', title: 'Нажмите, чтобы перейти на страницу, где есть возможность приобрести мерч QuizLerma.' },
	authRoute
];

export { routesData };
