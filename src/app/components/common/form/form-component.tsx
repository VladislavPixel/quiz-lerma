import { useState, Children, cloneElement, useEffect } from 'react';
import type { IDataPropsChangeForm, IConfigData } from '../../../type/form';
import { validator } from '../../../utils/validator';

interface IFormComponentProps<T> {
	children: React.ReactNode;
	data: T;
	classesParent: string;
	onSubmit: (data: T) => void;
	configData: IConfigData;
};

function FormComponent<T extends Record<PropertyKey, string>>({ children, data, classesParent, onSubmit, configData }: IFormComponentProps<T>) {
	const [formState, setFormState] = useState<T>(data || {});

	const [error, serError] = useState<Record<PropertyKey, string>>({});

	const handlerChange = ({ key, value }: IDataPropsChangeForm): void => {
		setFormState({ ...formState, [key]: value });
	};

	const handlerSubmitForm = (event: React.FormEvent<HTMLFormElement>): void => {
		event.preventDefault();

		onSubmit(formState);
	};

	function isIterable(value: Record<PropertyKey, any>): value is Iterable<unknown> {
		const isObj = typeof value === 'object' && value !== null;

		if (isObj && value[Symbol.iterator] && typeof value[Symbol.iterator] === 'function') {
			return true;
		}

		return false;
	};

	const newChildren = Children.map(children, (child) => {
		if (child && typeof child === 'object' && !isIterable(child)) {
			let props = {};

			if (child.type === 'button') {
				const isSubmitBtn = child.props.type === undefined || child.props.type === 'submit';

				props = {
					...child.props,
					type: isSubmitBtn ? 'submit' : 'button',
					className: `${classesParent}__sub-btn ${child.props.className ? child.props.className : ''}`
				};
			} else {
				props = child.props.typeElement === 'skip' ?
					{
						...child.props,
						classesParent
					} :
					{
						...child.props,
						value: formState[child.props.name],
						classesParent,
						onChange: handlerChange,
						error: error[child.props.name]
					};
			}

			return cloneElement(child, props);
		}

		return child;
	});

	useEffect((): void => {
		const errors = validator(configData, formState);

		serError(errors);
	}, [formState, configData]);

	return (
		<form onSubmit={handlerSubmitForm} className={`${classesParent}__form-component form-block`}>
			{newChildren}
		</form>
	);
};

export { FormComponent };
