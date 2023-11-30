import React, { FC } from 'react';
import { privacyPolicyParagraphs } from '../../auxiliary-content/privacy-policy';
import { privacyPolicy } from '../../routes';
import type { IElementPrivacyPolicy, ISettingInsertElement } from '../../type/privacy-policy-rules-data';
import { LinkMenu } from '../common/link-menu';

const PrivacyPolicyContent: FC = () => {
	const { icon, altIcon } = privacyPolicy;

	const insertingLink = (classesParent: string, value: string, substr: string, config: undefined | ISettingInsertElement) => {
		if (config === undefined) {
			return value;
		}

		const arr = value.split(substr);

		if (arr.length !== 2) {
			return value;
		}

		const { type, data } = config;

		const { path, text, title, icon, altIcon } = data;

		return (
			<React.Fragment>
				{arr[0]}
				<LinkMenu classesParent={classesParent} type={type} path={path} text={text} title={title} icon={icon} altIcon={altIcon} isImg={false} />
				{arr[1]}
			</React.Fragment>
		);
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
							<span className={isTitle ? 'privacy-policy__head-span' : ''}>{insertingLink('privacy-policy', textValue, '{}', el.insertElement)}</span>
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
