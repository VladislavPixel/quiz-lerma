import { FC } from 'react';
import { rulesRouter } from '../../routes';

// ОТРЕФАКТОРИТЬ ЭТУ СТРАНИЦУ И ПОЛИТИКИ

const ServiceRulesContent: FC = () => {
	const { icon, altIcon } = rulesRouter;

	return (
		<div className='service-rules__block'>
			<div className='service-rules__content _container'>
				<img className='service-rules__icon' src={icon} alt={altIcon} />
				<h2 className='service-rules__main-title'>Правила для пользователей сервиса QuizLerma.</h2>
			</div>
		</div>
	);
};

export { ServiceRulesContent };
