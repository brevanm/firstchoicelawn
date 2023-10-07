type Props = {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
};

const TextField = (props: Props) => {
  const { placeholder, value, setValue } = props;

  return (
    <input
      className="border border-gray-300 rounded px-4 py-2 w-full"
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default TextField;
