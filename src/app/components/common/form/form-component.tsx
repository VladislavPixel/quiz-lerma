import { useState, Children, cloneElement, useEffect, useCallback } from 'react';
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

	const [error, setError] = useState<Record<PropertyKey, string>>({});

	const handlerChange = useCallback(({ key, value }: IDataPropsChangeForm): void => {
		setFormState((prevState) => ({ ...prevState, [key]: value }));
	}, []);

	const validation = (): void => {
		const errors = validator(configData, formState);

		setError(errors);
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

	const arrayKeysErrors: string[] = Object.keys(error); // Если в состоянии ошибок есть ключи, делаем вывод, что блокировать кнопку формы можно

	const newChildren = Children.map(children, (child) => {
		if (child && typeof child === 'object' && !isIterable(child)) {
			let props = {};

			if (child.type === 'button') {
				const isSubmitBtn = child.props.type === undefined || child.props.type === 'submit';

				const isDisabled = isSubmitBtn && arrayKeysErrors.length !== 0;

				props = {
					...child.props,
					type: isSubmitBtn ? 'submit' : 'button',
					className: `${classesParent}__sub-btn ${child.props.className ? child.props.className : ''} ${isDisabled ? 'disabled-btn' : ''}`,
					disabled: (isDisabled ? true : false)
				};
			} else if (typeof child.type === 'object') {
				props = {
					...child.props,
					value: formState[child.props.name],
					classesParent,
					onChange: handlerChange,
					error: error[child.props.name]
				};
			} else if (typeof child.type === 'function' && child.props.typeElement === 'skip') {
				props = {
					...child.props,
					classesParent
				};
			} else {
				props = {
					...child.props
				};
			}

			return cloneElement(child, props);
		}

		return child;
	});

	useEffect((): void => {
		validation();
	}, [configData, formState]);

	return (
		<form onSubmit={handlerSubmitForm} className={`${classesParent}__form-component form-block`}>
			{newChildren}
		</form>
	);
};

export { FormComponent };
