import React from 'react';
import type { IElementPrivacyPolicy } from '../type/privacy-policy-rules-data';
import { insertingLink } from './inserting-link';

type CbToggle = (value: any) => void;

interface IRecursiveGenerationListsProps {
	classesParent: string;
	dataForRendering: IElementPrivacyPolicy[] | null | undefined;
	callbackForUpdateToggle?: CbToggle;
	settingToggle?: Record<string, { isActive: boolean }>;
};

const recursiveGenerationLists = ({ classesParent, dataForRendering, callbackForUpdateToggle, settingToggle }: IRecursiveGenerationListsProps) => {
	if (dataForRendering === null || dataForRendering === undefined || !Array.isArray(dataForRendering)) {
		return null;
	}

	const elements = (
		<ul className={`${classesParent}__list`}>
			{dataForRendering.map((el: IElementPrivacyPolicy) => {
				const textValue = el.text ? el.text : el.title !== undefined ? el.title : '';

				const isTitle = el.title !== undefined && el.title !== '';

				const isToggleElment = typeof el.toggle === 'object' && callbackForUpdateToggle;

				const elements = (
					<React.Fragment>
						<span title={isToggleElment ? el.toggle?.title : ''} className={(isTitle ? `${classesParent}__head-span` : '') + (isToggleElment ? ' toggle' : '')}>{insertingLink(classesParent, textValue, '{}', el.insertElement)}</span>
						{
							el.childrens && isToggleElment && settingToggle && settingToggle[el._id] && settingToggle[el._id].isActive ?
								recursiveGenerationLists({ classesParent: classesParent, dataForRendering: el.childrens, callbackForUpdateToggle: callbackForUpdateToggle, settingToggle: settingToggle }) :
									el.childrens && !isToggleElment ?
										recursiveGenerationLists({ classesParent: classesParent, dataForRendering: el.childrens, callbackForUpdateToggle: callbackForUpdateToggle, settingToggle: settingToggle }) :
											null
						}
					</React.Fragment>
				);

				if (isToggleElment) {
					return <li onClick={() => {callbackForUpdateToggle(el._id)}} key={el._id} className={`${classesParent}__li-el`}>{elements}</li>;
				}

				return <li key={el._id} className={`${classesParent}__li-el`}>{elements}</li>;
			})}
		</ul>
	);

	return elements;
};

export { recursiveGenerationLists };
