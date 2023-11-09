import React from 'react';
import type { IMainMenuElement } from '../../type/main-menu';

interface IAuthHoverBlockProps {
	title: string;
	data: IMainMenuElement[];
};

const AuthHoverBlock = ({ title, data }: IAuthHoverBlockProps) => {
	return (
		<div className='hover-block-auth'>
			<div className='hover-block-auth__title'>{title}</div>
			<div className='hover-block-auth__container-row'>
				{data.map(({ _id, text, path, icon, altIcon, title }: IMainMenuElement) => {
					return (
						<React.Fragment key={_id}>
							<button className={'hover-block-auth__btn' + (text === 'Войти' ? ' button-purple' : ' button-purple-white')} type='button'>{text}</button>
							<hr />
						</React.Fragment>
					);
				})}
			</div>
		</div>
	);
};

export { AuthHoverBlock };
