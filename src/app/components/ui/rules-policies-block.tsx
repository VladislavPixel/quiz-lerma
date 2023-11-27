import { FC } from 'react';
import { rulesPolicies } from '../../routes';
import { LinkMenu } from '../common/link-menu';
import type { IMainMenuElement } from '../../type/main-menu';

interface IRulesPoliciesBlock {
	typeElement?: string;
	classesParent?: string;
	title: string;
};

const RulesPoliciesBlock: FC<IRulesPoliciesBlock> = ({ classesParent, title }) => {
	return (
		<div className={`${classesParent}__block-rules-policies rules-policies-block`}>
			<div className='rules-policies-block__head'>
				<p className='rules-policies-block__title'>{title}</p>
				<div className='rules-policies-block__img-container'>
					<img className='rules-policies-block__icon' src='./assets/images/icons/info.svg' alt='Квадратная иконка значка с символом информирования - i' />
				</div>
			</div>
			<ul className='rules-policies-block__links'>
				{rulesPolicies.map(({ _id, path, title, icon, altIcon, text }: IMainMenuElement) => {
					return (
						<li key={_id} className='rules-policies-block__li-el'>
							<LinkMenu classesParent='rules-policies-block' path={path} title={title} icon={icon} altIcon={altIcon} text={text} type='Link' isImg={false} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export { RulesPoliciesBlock };
