export type Props = {
  id?: string;
  bgColor?: string;
  padding?: boolean;
  children: React.ReactNode;
};

const Showcase = (props: Props) => {
  const { bgColor, id, children, padding } = props;

  const paddingClass = padding ? "py-4 px-6 md:px-40 " : "";

  return (
    <div
      id={id}
      style={{ backgroundColor: bgColor }}
      className={`min-h-screen w-full relative ${paddingClass}}`}
    >
      {children}
    </div>
  );
};

export default Showcase;
