interface FormControlProps {
  type: any;
  placeholder: any;
  name: any;
}

const FormControl = ({ type, placeholder, name }: FormControlProps) => {
  return (
    <input
      type={type}
      className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-orange-500"
      placeholder={placeholder}
      name={name}
      id={name}
      required
    />
  );
};

export default FormControl;
