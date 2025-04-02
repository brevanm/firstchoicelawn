import { AiFillCaretLeft } from "react-icons/ai";

export const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <AiFillCaretLeft
      className={className}
      style={{ ...style, display: 'block', fill: '#54784A' }}
      onClick={onClick}
    />
  );
}
