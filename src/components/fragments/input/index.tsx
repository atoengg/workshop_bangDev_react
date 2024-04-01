import FormControl from "../../elements/form-control";
import Label from "../../elements/label";

interface InputProps {
  label: any;
  type: any;
  placeholder: any;
  name: any;
}

const Input = ({ label, type, placeholder, name }: InputProps) => {
  return (
    <>
      <Label htmlFor={name} label={label} />
      <FormControl type={type} placeholder={placeholder} name={name} />
    </>
  );
};

export default Input;
