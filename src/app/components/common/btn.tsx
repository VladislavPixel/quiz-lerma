interface IBtnProps {
  typeBtn: 'button' | 'submit';
  title: string;
  classes: string;
  children: React.ReactNode;
  onCb: () => void;
};

const Btn = ({ typeBtn, title, classes, children, onCb }: IBtnProps) => {
  return <button onClick={onCb} className={`btn ${classes}`} title={title} type={typeBtn}>{children}</button>;
};

export { Btn };
