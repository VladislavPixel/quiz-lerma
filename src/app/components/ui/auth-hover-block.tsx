import React from 'react';
import type { IMainMenuElement } from '../../type/main-menu';
import { Btn } from '../common/btn';
import { useNavigate } from 'react-router-dom';
import { HrElement } from '../common/hr-element';

interface IAuthHoverBlockProps {
	title: string;
	data: IMainMenuElement[];
};

const AuthHoverBlock = ({ title, data }: IAuthHoverBlockProps) => {
	const navigate = useNavigate();

	return (
		<div className='hover-block-auth'>
			<div className='hover-block-auth__title'>{title}</div>
			<div className='hover-block-auth__container-row'>
				{data.map(({ _id, text, path, icon, altIcon, title }: IMainMenuElement, index: number) => {
					const cb = (): void => {
						navigate(path);
					};

					return (
						<React.Fragment key={_id}>
							<Btn onCb={cb} typeBtn='button' title={title} classes={'hover-block-auth__btn' + (text === 'Войти' ? ' button-purple' : ' button-purple-white')}>
								<img src={icon} className='hover-block-auth__btn-icon' alt={altIcon} />
								{text}
							</Btn>
							<HrElement isShow={index === 0} />
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
};

export { AuthHoverBlock };
