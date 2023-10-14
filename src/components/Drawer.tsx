import IconClose from "./icons/CloseIcon";

type Props = {
  children?: React.ReactNode;
  onClose?: () => void;
  open: boolean;
};

const Drawer = (props: Props) => {
  const { children, onClose, open } = props;

  console.log("open: ", open);

  return (
    <div
      className={`transform fixed h-full w-64 z-40 right-0 inset-y-0 bg-white transition-transform ease-in-out duration-300 ${
        open ? "" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end">
        <IconClose
          className="text-black cursor-pointer mr-10 mt-10"
          style={{ fontSize: "2rem" }}
          onClick={onClose}
        />
      </div>
      {children}
    </div>
  );
};

export default Drawer;
