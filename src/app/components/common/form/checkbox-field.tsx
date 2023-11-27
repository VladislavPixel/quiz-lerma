import { FC, ChangeEvent } from 'react';
import type { IDataPropsChangeForm } from '../../../type/form';

interface ICheckboxFieldProps {
	classesParent?: string;
	label: string;
	name: string;
	value?: string;
	onChange?: (data: IDataPropsChangeForm) => void;
};

const CheckboxField: FC<ICheckboxFieldProps> = ({ classesParent, label, name, value, onChange }) => {
	const handlerChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const result = {
			key: name,
			value: event.target.checked ? 'true' : 'false'
		};

		if (onChange && typeof onChange === 'function') {
			onChange(result);
		}
	};

	return (
		<div className={`${classesParent}__checkbox-field field-checkbox-block`}>
			<div className='field-checkbox-block__container'>
				<div className='field-checkbox-block__input-wrapper'>
					<input value={value} title='Поле выбора.' className='field-checkbox-block__field' onChange={handlerChange} type='checkbox' id={name} name={name} />
					<label title='Нажмите, чтобы выбрать элемент.' htmlFor={name} className='field-checkbox-block__label'>{label}</label>
				</div>
			</div>
		</div>
	);
};

export { CheckboxField };
