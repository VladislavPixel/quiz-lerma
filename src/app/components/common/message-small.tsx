import { FC } from 'react';

interface IMessageSmall {
	text: string;
	classesParent?: string;
	typeElement?: string;
};

const MessageSmall: FC<IMessageSmall> = ({ text, classesParent }) => {
	return (
		<div className={`${classesParent}__small-message message-small`}>
			<p className='message-small__paragraph'>{text}</p>
		</div>
	);
};

export { MessageSmall };
