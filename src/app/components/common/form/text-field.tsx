import { ChangeEvent, useState } from 'react';
import type { IDataPropsChangeForm } from '../../../type/form';

interface ITextField {
	placeholder: string;
	name: string;
	label: string;
	type?: string;
	iconName?: string;
	classesParent?: string;
	onChange?: (data: IDataPropsChangeForm) => void;
	value?: string;
};

const TextField = ({ placeholder, name, label, classesParent, type, iconName, onChange, value }: ITextField) => {
	const [isShow, setShow] = useState<boolean>(false);

	const handlerChange = (event: ChangeEvent<HTMLInputElement>): void => {
		event.preventDefault();

		const result = {
			key: name,
			value: event.target.value
		};

		if (onChange && typeof onChange === 'function') {
			onChange(result);
		}
	};

	const handlerClickIconShow = (): void => {
		setShow((prevState) => !prevState);
	};

	const isIconName = typeof iconName === 'string' && iconName !== '';

	const isPassword = type === 'password';

	const currentIconEyeName = !isShow ? 'eye' : 'eye-secret';

	const correctType = isPassword && isShow ? 'text' : isPassword && !isShow ? 'password' : type === undefined ? 'text' : type;

	return (
		<div className={`${classesParent}__text-field field-text-block`}>
			<div className='field-text-block__container'>
				<label title='Нажмите, чтобы установить указатель на элемент.' htmlFor={name} className='field-text-block__label'>{label}</label>
				<div className='field-text-block__input-wrapper'>
					<input value={value} title='Поле ввода.' className='field-text-block__field' onChange={handlerChange} type={correctType} id={name} name={name} placeholder={placeholder} />
					{isIconName &&
						<img src={`./assets/images/icons/${iconName}`} alt={`Иконка поля - ${label}.`} className='field-text-block__icon' />
					}
					{isPassword &&
						<div onClick={handlerClickIconShow} title={`Нажмите, чтобы ${isShow ? 'скрыть' : 'открыть'} пароль.`} className='field-text-block__eye-wrap'>
							<img src={`./assets/images/icons/${currentIconEyeName}.svg`} className='field-text-block__eye-password' alt='Иконка глазика пароля, которая говорит пользователю скрыт пароль на экране или открыт.' />
						</div>
					}
				</div>
			</div>
		</div>
	);
};

export { TextField };
