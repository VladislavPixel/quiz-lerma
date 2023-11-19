import { useState, Children, cloneElement } from 'react';
import type { IDataPropsChangeForm } from '../../../type/form';

interface IFormComponentProps<T> {
	children: React.ReactNode;
	data: T;
	classesParent: string;
	onSubmit: (data: T) => void;
};

interface IResultCheckChildIterable {
	isIterable: boolean;
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

	function checkChildIterable<T extends Record<PropertyKey, any>>(value: T): IResultCheckChildIterable {
		if (!value[Symbol.iterator]) {
			return { isIterable: true };
		}

		return { isIterable: false };
	};

	const newChildren = Children.map(children, (child) => {
		if (child && typeof child === 'object') {
			let value: React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal = child;

			let props = {};

			if (checkChildIterable(value[Symbol.iterator])) {
				if (value.type === 'button') {
					const isSubmitBtn = value.props.type === undefined || value.props.type === 'submit';

					props = {
						...value.props,
						type: isSubmitBtn ? 'submit' : 'button',
						className: `${classesParent}__sub-btn ${value.props.className ? value.props.className : ''}`
					}
				} else {
					props = {
						...value.props,
						value: formState[value.props.name],
						classesParent,
						onChange: handlerChange
					};
				}
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
