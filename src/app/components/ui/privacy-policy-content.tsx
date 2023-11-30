import { FC } from 'react';
import { privacyPolicyParagraphs } from '../../auxiliary-content/privacy-policy';
import { privacyPolicy } from '../../routes';
import type { IElementPrivacyPolicy, ISettingInsertElement } from '../../type/privacy-policy-rules-data';

const PrivacyPolicyContent: FC = () => {
	const { icon, altIcon } = privacyPolicy;

	const insertingLink = (value: string, substr: string, config: undefined | ISettingInsertElement): string => {
		if (config === undefined) {
			return value;
		}

		console.log(substr, config);

		const regExp = new RegExp(`/${substr}/`);

		console.log(regExp); // Доделать замену {} на линк значение

		const newValue = value.replace(regExp, (str) => {
			
			return str;
		});

		return newValue;
	};

	const recursiveGeneration = (arrData: IElementPrivacyPolicy[] | null | undefined) => {
		if (arrData === null || arrData === undefined || !Array.isArray(arrData)) {
			return null;
		}

		const elements = (
			<ul className='privacy-policy__list'>
				{arrData.map((el) => {
					const textValue = el.text ? el.text : el.title !== undefined ? el.title : '';

					const isTitle = el.title !== undefined && el.title !== '';

					return (
						<li key={el._id} className='privacy-policy__li-el'>
							<span className={isTitle ? 'privacy-policy__head-span' : ''}>{insertingLink(textValue, '{}', el.insertElement)}</span>
							{el.childrens && recursiveGeneration(el.childrens)}
						</li>
					);
				})}
			</ul>
		);

		return elements;
	};

	const contentJSX = recursiveGeneration(privacyPolicyParagraphs);

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
