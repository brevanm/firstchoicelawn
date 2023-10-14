import { useLayoutEffect, useState } from "react";

const useLockBodyScroll = () => {
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

export default useLockBodyScroll;
