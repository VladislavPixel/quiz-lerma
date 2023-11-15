import { useState } from "react";

interface IFormComponent {
	children: React.ReactNode;
	data: any;
	classesParent: string;
};

const FormComponent = ({ children, data, classesParent }: IFormComponent) => {
	const [formState, setFormState] = useState(data || {});

	return (
		<form className={`${classesParent}__form-component form-block`}>
			{children}
		</form>
	);
};

export { FormComponent };
