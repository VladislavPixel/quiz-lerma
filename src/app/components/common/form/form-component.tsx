import { useState, Children } from "react";

interface IFormComponent {
	children: React.ReactNode;
	data: any;
	classesParent: string;
	onSubmit: (data: any) => any;
};

const FormComponent = ({ children, data, classesParent, onSubmit }: IFormComponent) => {
	const [formState, setFormState] = useState(data || {});

	const newChildren = Children.map(children, (child) => {
		if (child && typeof child === 'object') {
			// cloneElement(element, props, ...children) 
		}

		console.log(child, "Ребенок");
	});

	return (
		<form className={`${classesParent}__form-component form-block`}>
			{children}
		</form>
	);
};

export { FormComponent };
