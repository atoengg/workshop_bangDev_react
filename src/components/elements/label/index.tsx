interface LabelProps {
  htmlFor: any;
  label: any;
}
const Label = ({ htmlFor, label }: LabelProps) => {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-lg font-medium text-black mb-2"
      >
        {label}
      </label>
    </div>
  );
};

export default Label;
