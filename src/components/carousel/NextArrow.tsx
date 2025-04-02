import { AiFillCaretRight } from "react-icons/ai";

export const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <AiFillCaretRight
      className={className}
      style={{ ...style, display: 'block', fill: '#54784A' }}
      onClick={onClick}
    />
  );
}
