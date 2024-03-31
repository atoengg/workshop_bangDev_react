interface ButtonProps {
  className: any;
  label: any;
}

const Button = ({ className, label }: ButtonProps) => {
  return <button className={className}>{label}</button>;
};

export default Button;
