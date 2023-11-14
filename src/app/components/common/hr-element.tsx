interface IHrElementProps {
	isShow: boolean;
};

const HrElement = ({ isShow }: IHrElementProps) => {
	if (isShow) {
		return <hr />;
	}

	return null;
};

export { HrElement };
