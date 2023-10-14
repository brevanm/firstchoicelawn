type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  highlight?: boolean;
};

const Button = (props: Props) => {
  const { children, highlight, onClick } = props;

  const baseClass =
    "bg-transparent text-white font-semibold hover:bg-white hover:text-green-800 py-2 px-4 border border-white hover:border-transparent";

  const highlightClass = "bg-green-800 text-white border-none";
  const classes = highlight ? `${baseClass} ${highlightClass}` : baseClass;

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
