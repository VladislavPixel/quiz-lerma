import { useState, Children, cloneElement } from 'react';
import type { IDataPropsChangeForm } from '../../../type/form';

interface IFormComponentProps<T> {
	children: React.ReactNode;
	data: T;
	classesParent: string;
	onSubmit: (data: T) => void;
};

function FormComponent<T extends Record<PropertyKey, string>>({ children, data, classesParent, onSubmit }: IFormComponentProps<T>) {
	const [formState, setFormState] = useState(data || {});

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
						onChange: handlerChange
					};
			}

			return cloneElement(child, props);
		}

		return child;
	});

	return (
		<form onSubmit={handlerSubmitForm} className={`${classesParent}__form-component form-block`}>
			{newChildren}
		</form>
	);
};

export { FormComponent };
