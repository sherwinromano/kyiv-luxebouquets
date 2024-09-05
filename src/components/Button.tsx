type ButtonProps = {
  buttonStyle: string;
  buttonLabel: string;
};

const Button = ({ buttonStyle, buttonLabel }: ButtonProps) => {
  return <button className={buttonStyle}>{buttonLabel}</button>;
};

export default Button;
