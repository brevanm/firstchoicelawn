type Props = {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  options: string[];
};

const Select = (props: Props) => {
  const { placeholder, value, setValue, options } = props;
  return (
    <select
      value={value}
      onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e);
        setValue(e.target.selectedOptions[0].value);
      }}
      className="block bg-white border border-gray-300 placeholder-gray-300 rounded px-4 py-2 w-full focus:border-green-800 focus:outline-none"
    >
      <option value="0">{placeholder}</option>
      {options.map((option) => (
        <option key={`option-${option}`} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default Select;
