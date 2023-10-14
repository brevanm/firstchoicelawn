import { useEffect } from "react";
import useLockBodyScroll from "../utils/hooks";
import IconClose from "./icons/CloseIcon";

type Props = {
  children?: React.ReactNode;
  onClose?: () => void;
  open: boolean;
};

const Drawer = (props: Props) => {
  const { children, onClose, open } = props;

  const setLock = useLockBodyScroll();

  useEffect(() => {
    setLock(open);
  }, [open, setLock]);

  console.log("open: ", open);

  return (
    <>
      <div
        className={`${
          open ? "block" : "hidden"
        } fixed top-0 left-0 w-full h-full overflow-hidden bg-opacity-50 bg-black z-30 transition-opacity ease-in-out duration-300`}
        onClick={onClose}
      />
      <div
        className={`transform fixed h-full w-64 z-40 right-0 inset-y-0 bg-white transition-transform ease-in-out duration-300 ${
          open ? "" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
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
    </>
  );
};

export default Drawer;
