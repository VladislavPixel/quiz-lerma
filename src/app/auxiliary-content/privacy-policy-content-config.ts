import type { IServiceRulesContentConfig } from '../type/privacy-policy-rules-data';
import { privacyPolicy } from '../routes';
import { privacyPolicyParagraphs } from './privacy-policy';

const privacyPolicyContentConfig: IServiceRulesContentConfig = {
   classesParent: 'privacy-policy',
   title: 'Политика конфиденциальности сервиса QuizLerma.',
   iconImg: privacyPolicy.icon,
   altImg: privacyPolicy.altIcon,
   dataForRendering: privacyPolicyParagraphs
};

export { privacyPolicyContentConfig };
