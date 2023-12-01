import { FC, useState } from 'react';
import { rulesRouter } from '../../routes';
import { recursiveGenerationLists } from '../../utils/recursive-generation-lists';
import { serviceRulesParagraphs } from '../../auxiliary-content/service-rules';

const ServiceRulesContent: FC = () => {
	const [dataToggle, setDataToggle] = useState<Record<string, { isActive: boolean }>>({});

	const handlerUpdateDataToggle = (id: string): void => {
		setDataToggle((prevState) => {
			return ({
				...prevState,
				[id]: {
					isActive: dataToggle[id] && dataToggle[id].isActive ? false : dataToggle[id] && !dataToggle[id].isActive ? true : !dataToggle[id] ? true : false
				}
			});
		});
	};

	const { icon, altIcon } = rulesRouter;

	const contentJSX = recursiveGenerationLists({
		classesParent: 'service-rules',
		dataForRendering: serviceRulesParagraphs,
		callbackForUpdateToggle: handlerUpdateDataToggle,
		settingToggle: dataToggle
	});

	return (
		<div className='service-rules__block'>
			<div className='service-rules__content _container'>
				<img className='service-rules__icon' src={icon} alt={altIcon} />
				<h2 className='service-rules__main-title'>Правила для пользователей сервиса QuizLerma.</h2>
				{contentJSX}
			</div>
		</div>
	);
};

export { ServiceRulesContent };
