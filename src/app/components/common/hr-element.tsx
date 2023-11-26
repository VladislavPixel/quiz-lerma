import { FC } from 'react';

interface IHrElementProps {
	isShow: boolean;
	typeElement?: string;
};

const HrElement: FC<IHrElementProps> = ({ isShow }) => {
	if (isShow) {
		return <hr className="hr" />;
	}

	return null;
};

export { HrElement };
