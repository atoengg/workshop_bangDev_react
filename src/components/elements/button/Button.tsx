interface ButtonProps {
  className: any;
  type: any;
  label: any;
}

const Button = ({ className, type, label }: ButtonProps) => {
  return (
    <button className={className} type={type}>
      {label}
    </button>
  );
};

export default Button;
