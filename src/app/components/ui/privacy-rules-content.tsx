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
		classesParent,
		dataForRendering,
		callbackForUpdateToggle,
		settingToggle
	});

   return (
      <div className={`${classesParent}__block`}>
			<div className={`${classesParent}__content _container`}>
				<img className={`${classesParent}__icon`} src={iconImg} alt={altImg} />
				<h2 className={`${classesParent}__main-title`}>{title}</h2>
				{contentJSX}
			</div>
		</div>
   );
};

export { PrivacyRulesContent };
