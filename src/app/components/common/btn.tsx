import { FC } from 'react';

interface IBtnProps {
	typeBtn: 'button' | 'submit';
	title: string;
	classes: string;
	children: React.ReactNode;
	onCb: () => void;
};

const Btn: FC<IBtnProps> = ({ typeBtn, title, classes, children, onCb }) => {
	return <button onClick={onCb} className={`btn ${classes}`} title={title} type={typeBtn}>{children}</button>;
};

export { Btn };
