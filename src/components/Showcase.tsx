export type Props = {
  id?: string;
  bgColor?: string;
  padding?: boolean;
  fullHeight?: boolean;
  children: React.ReactNode;
};

const Showcase = (props: Props) => {
  const { bgColor, id, children, padding, fullHeight } = props;

  const paddingClass = padding ? "py-4 px-6 md:px-40 " : "";
  const fullHeightClass = fullHeight ? "min-h-screen" : "";

  return (
    <div
      id={id}
      style={{ backgroundColor: bgColor }}
      className={`${fullHeightClass} w-full relative ${paddingClass}}`}
    >
      {children}
    </div>
  );
};

export default Showcase;
