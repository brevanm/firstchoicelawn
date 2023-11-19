import { createContext, useState } from "react";
import { Alert } from "../utils/types";
import SnackBar from "./SnackBar";

export const SnackBarContext = createContext<(alert: Alert) => void>(() => {});

type Props = {
  children: React.ReactNode;
};

const SnackBarProvider = (props: Props) => {
  const { children } = props;
  const [alert, setAlert] = useState<Alert | undefined>(undefined);

  const showSnackBar = (alert: Alert) => {
    setAlert(alert);
    setTimeout(() => {
      setAlert(undefined);
    }, 5000);
  };

  return (
    <SnackBarContext.Provider value={showSnackBar}>
      {alert && (
        <div className="fixed top-4 w-full z-50 flex items-center justify-center">
          <SnackBar alert={alert} onClose={() => setAlert(undefined)} />
        </div>
      )}
      {children}
    </SnackBarContext.Provider>
  );
};

export default SnackBarProvider;
