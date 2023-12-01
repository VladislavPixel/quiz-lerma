import { logoRoute, emailRoute } from '../routes';
import type { IPrivacyPolicyRulesData } from '../type/privacy-policy-rules-data';

const privacyPolicyParagraphs: IPrivacyPolicyRulesData = [
	{
		_id: '1',
		text: 'Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности) действует в отношении всей информации, которую сервис - {} может получить о Пользователе во время использования программ и продуктов Сервиса.',
		insertElement: {
			type: 'Link',
			data: { ...logoRoute, title: 'Нажмите, чтобы перейти на главную' }
		}
	},
	{
		_id: '2',
		title: '1. Термины и определения',
		childrens: [
			{
				_id: '2.1',
				text: '1.1. В настоящей Политике конфиденциальности, если из текста прямо не вытекает иное, следующие термины будут иметь указанные ниже значения:',
				childrens: [
					{
						_id: '2.1.1',
						text: '«Администратор» - организует и (или) осуществляет обработку персональных данных, а также определяет цели обработки персональных данных, состав персональных данных, подлежащих обработке, действия (операции), совершаемые с персональными данными.'
					},
					{
						_id: '2.1.2',
						text: '«Персональные данные» - любая информация, относящаяся прямо или косвенно к определенному физическому лицу (субъекту персональных данных).'
					},
					{
						_id: '2.1.3',
						text: '«Обработка персональных данных» - сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, обезличивание, блокирование, удаление, уничтожение персональных данных с использованием средств автоматизации.'
					},
					{
						_id: '2.1.4',
						text: '«Конфиденциальность персональных данных» - обязательное требование не допускать распространения персональных данных без согласия субъекта персональных данных или наличия иного законного основания.'
					},
					{
						_id: '2.1.5',
						text: '«Пользователь Сервиса» - лицо, зарегистрированное на Сервисе.'
					}
				]
			}
		]
	},
	{
		_id: '3',
		title: '2. Общие положения',
		childrens: [
			{
				_id: '3.1',
				text: '2.1. Использование Пользователем этого сервиса означает согласие с настоящей Политикой конфиденциальности и условиями обработки персональных данных Пользователя.'
			},
			{
				_id: '3.2',
				text: '2.2. В случае несогласия с условиями Политики конфиденциальности Пользователь должен прекратить использование Сервиса.'
			},
			{
				_id: '3.3',
				text: '2.3. Настоящая Политика конфиденциальности применяется только к указанному Сервису . Администратор Сервиса не контролирует и не несет ответственность за сервисы/сайты третьих лиц, на которые Пользователь может перейти по ссылкам, доступным на Сервисе.'
			}
		]
	},
	{
		_id: '4',
		title: '3. Предмет политики конфиденциальности',
		childrens: [
			{
				_id: '4.1',
				text: '3.1. Пользователь дает свое согласие Администратору на обработку персональных данных Пользователя, предоставленных при регистрации, а также предоставленной Пользователем в Личном кабинете после регистрации.'
			},
			{
				_id: '4.2',
				text: '3.2. Обработка персональных данных производится в целях идентификации Пользователя, зарегистрированного на сервисе с целью предоставления ему доступа к персонализированным ресурсам Сервиса, обеспечения Пользователя обратной связью при использовании Сервиса, с целью предоставления Пользователю эффективной клиентской и технической поддержки при возникновении проблем связанных с использованием Сервиса,  а также в целях направления на указанный Пользователем при регистрации адрес электронной почты информационных и рекламных сообщений.'
			},
			{
				_id: '4.3',
				text: '3.3. Обработка персональных данных Пользователя осуществляется без ограничения срока, любым законным способом, в том числе в информационных системах персональных данных с использованием средств автоматизации или без использования таких средств.'
			},
			{
				_id: '4.4',
				text: '3.4. Пользователь может в любое время отозвать согласие на обработку персональных данных, направив Администратору соответствующее уведомление на адрес электронной почты {}. При этом пользователь соглашается с тем, что за Администратором остается право обработки персональных данных Пользователя в случаях, предусмотренных законодательством Российской Федерации.',
				insertElement: {
					type: 'a:href',
					data: { ...emailRoute }
				}
			},
			{
				_id: '4.5',
				text: '3.5. Пользователь дает согласие на получение информационных рассылок и рекламных материалов от Администратора, либо от иных лиц по поручению Администратора, на адрес электронной почты или другие контактные данные, указанные Пользователем как при регистрации, так и при заполнении профиля на Сервисе.'
			},
			{
				_id: '4.6',
				text: 'Согласие на получение информационных рассылок и рекламных материалов может быть отозвано Пользователем в любое время путем направления Администратору соответствующего уведомления на почтовый адрес, указанный в пунке 3.4. После получения такого уведомления Администратор прекращает направлять на указанный Пользователем при регистрации адрес электронной почты сообщения с рекламными материалами.'
			},
			{
				_id: '4.7',
				text: '3.6. Для максимального удобства пользования всеми возможностями сервиса мы используем различные фичи браузера по сохранению вспомогательных данных. Это небольшие данные, которые сохраняются в виде текстовых файлов на компьютере или в самом браузере Пользователя. Наш сервис использует все способы для улучшения взаимодействия с Пользователем, а именно для идентификации компьютера Пользователя с помощью IP-адреса, сбора данных об истории посещения страниц сервиса, сохранения пользовательских настроек, поисковых действий и избранного.  Наши файлы и сохраненные состояния не хранят никакие персональные данные, не могут содержать вирусы, не могут устанавливать вредоносное программное обеспечение и не могут как-либо повредить компьютер Пользователя.'
			},
			{
				_id: '4.8',
				text: '3.7. Использование Пользователем нашего сервиса означает полное, безукоризненное согласие с настоящей Политикой использования файлов и состояний.'
			}
		]
	},
	{
		_id: '5',
		title: '4. Гарантии',
		childrens: [
			{
				_id: '5.1',
				text: '4.1. Администратор сервиса гарантирует использование полученной информации исключительно для целей, указанных в п. 3.2. настоящей Политики конфиденциальности.'
			},
			{
				_id: '5.2',
				text: '4.2. Администратор сервиса берет на себя обязательство обеспечить хранение конфиденциальной информации в тайне, не разглашать без предварительного письменного разрешения Пользователя, а также не осуществлять продажу, обмен, опубликование, либо разглашение иными возможными способами переданных персональных данных Пользователя.'
			},
			{
				_id: '5.3',
				text: '4.3. Администратор сервиса берет на себя обязательство предпринимать необходимые организационные и технические меры для защиты персональной информации Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.'
			}
		]
	},
	{
		_id: '6',
		title: '5. Ответственность сторон',
		childrens: [
			{
				_id: '6.1',
				text: '5.1. Администратор сервиса, не исполнивший свои обязательства, несёт ответственность за убытки, понесённые Пользователем в связи с неправомерным использованием персональных данных, в соответствии с законодательством Российской Федерации, за исключением случаев, когда персональные данные Пользователя могут быть переданы уполномоченным органам государственной власти Российской Федерации по основаниям и в порядке, установленном законодательством Российской Федерации.'
			},
			{
				_id: '6.2',
				text: '5.2. В случае утраты или разглашения персональных данных Администрация сервиса не несёт ответственность, если данная конфиденциальная информация:',
				childrens: [
					{
						_id: '6.2.1',
						text: '5.2.1. Стала публичным достоянием до её утраты или разглашения.'
					},
					{
						_id: '6.2.2',
						text: '5.2.2. Была получена от третьей стороны до момента её получения Администрацией сервиса.'
					},
					{
						_id: '6.2.3',
						text: '5.2.3. Была разглашена с согласия Пользователя.'
					}
				]
			}
		]
	},
	{
		_id: '7',
		title: '6. Разрешение споров',
		childrens: [
			{
				_id: '7.1',
				text: '6.1. Все споры, разногласия и претензии, возникающие из отношений между Пользователем сервиса и Администратором сервиса, Стороны будут стремиться решить путем переговоров. Сторона, у которой возникли претензии и/или разногласия, направляет другой Стороне сообщение с указанием возникших претензий и/или разногласий.'
			},
			{
				_id: '7.2',
				text: '6.2. В случае если ответ на сообщение не будет получен направившей сообщение Стороной в течение 30 (тридцати) рабочих дней с даты направления соответствующего сообщения, либо если Стороны не придут к соглашению по возникшим претензиям и/или разногласиям, спор подлежит разрешению в судебном порядке по месту нахождения Администратора в соответствии с действующим законодательством Российской Федерации.'
			}
		]
	},
	{
		_id: '8',
		title: '7. Заключительные положения',
		childrens: [
			{
				_id: '8.1',
				text: '7.1. Администрация сервиса вправе вносить изменения в настоящую Политику конфиденциальности без согласия Пользователя.'
			},
			{
				_id: '8.2',
				text: '7.2. Новая Политика конфиденциальности вступает в силу с момента ее размещения, официального опубликования на Сервисе, если иное не предусмотрено новой редакцией Политики конфиденциальности.'
			},
			{
				_id: '8.3',
				text: '7.3. Пользователь подтверждает, что ознакомился со всеми положениями Политики конфиденциальности, понимает и принимает их.'
			}
		]
	}
];

export { privacyPolicyParagraphs };
