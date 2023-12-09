import { FC } from 'react';
import { recursiveGenerationLists } from '../../utils/recursive-generation-lists';
import type { IPrivacyPolicyRulesData, AuxSettingToggle } from '../../type/privacy-policy-rules-data';

interface PrivacyRulesContentProps {
   classesParent: string;
	title: string;
	iconImg: string;
	altImg: string;
	dataForRendering: IPrivacyPolicyRulesData;
	callbackForUpdateToggle?: (id: string) => void;
	settingToggle?: AuxSettingToggle;
};

const PrivacyRulesContent: FC<PrivacyRulesContentProps> = ({ classesParent, title, iconImg, altImg, dataForRendering, callbackForUpdateToggle, settingToggle }) => {
	const contentJSX = recursiveGenerationLists({
		classesParent: 'block-privacy-rules',
		dataForRendering,
		callbackForUpdateToggle,
		settingToggle
	});

   return (
      <div className={`${classesParent}__block block-privacy-rules`}>
			<div className='block-privacy-rules__content _container'>
				<img className='block-privacy-rules__icon' src={iconImg} alt={altImg} />
				<h2 className='block-privacy-rules__main-title'>{title}</h2>
				{contentJSX}
			</div>
		</div>
   );
};

export { PrivacyRulesContent };
