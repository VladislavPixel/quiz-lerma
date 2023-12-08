import { rulesRouter } from '../routes';
import { serviceRulesParagraphs } from './service-rules';
import type { IServiceRulesContentConfig } from '../type/privacy-policy-rules-data';

const serviceRulesContentConfig: IServiceRulesContentConfig = {
   classesParent: 'service-rules',
   title: 'Правила для пользователей сервиса QuizLerma.',
   iconImg: rulesRouter.icon,
   altImg: rulesRouter.altIcon,
   dataForRendering: serviceRulesParagraphs
};

export { serviceRulesContentConfig };
