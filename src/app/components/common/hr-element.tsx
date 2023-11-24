interface IHrElementProps {
	isShow: boolean;
	typeElement?: string;
};

const HrElement = ({ isShow }: IHrElementProps) => {
	if (isShow) {
		return <hr className="hr" />;
	}

	return null;
};

export { HrElement };
