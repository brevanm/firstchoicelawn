type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  highlight?: boolean;
};

const Button = (props: Props) => {
  const { children, highlight, onClick } = props;

  const baseClass =
    "text-white font-semibold py-2 px-4 border border-white hover:border-transparent";

  const regularClass = "bg-transparent hover:bg-white hover:text-fcll-green";
  const highlightClass = "bg-fcll-green border-none hover:bg-gray-800";

  const classes = highlight
    ? baseClass + " " + highlightClass
    : baseClass + " " + regularClass;

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
