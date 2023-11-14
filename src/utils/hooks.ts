import { useLayoutEffect, useEffect, useState, useContext } from "react";
import { SnackBarContext } from "../components/SnackBarProvider";

export const useSnackBarContext = () => useContext(SnackBarContext);

export const useLockBodyScroll = () => {
  const [locked, setLocked] = useState(false);
  const [originalStyle, setOriginalStyle] = useState<string | null>(null);

  useLayoutEffect(() => {
    if (originalStyle === null) {
      setOriginalStyle(window.getComputedStyle(document.body).overflow);
    }
    if (!originalStyle) return;

    document.body.style.overflow = locked ? "hidden" : originalStyle;

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [locked, originalStyle]);

  return setLocked;
};

export const useIsAtTop = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsAtTop(scrollPosition <= 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isAtTop;
};
