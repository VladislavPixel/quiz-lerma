import { FC } from 'react';
import { privacyPolicyParagraphs } from '../../auxiliary-content/privacy-policy';
import { privacyPolicy } from '../../routes';
import { recursiveGenerationLists } from '../../utils/recursive-generation-lists';

const PrivacyPolicyContent: FC = () => {
	const { icon, altIcon } = privacyPolicy;

	const contentJSX = recursiveGenerationLists({
		classesParent: 'privacy-policy',
		dataForRendering: privacyPolicyParagraphs
	});

	return (
		<div className='privacy-policy__block'>
			<div className='privacy-policy__content _container'>
				<img className='privacy-policy__icon' src={icon} alt={altIcon} />
				<h2 className='privacy-policy__main-title'>Политика конфиденциальности сервиса QuizLerma.</h2>
				{contentJSX}
			</div>
		</div>
	);
};

export { PrivacyPolicyContent };
