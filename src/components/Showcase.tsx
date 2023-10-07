export type Props = {
  id?: string;
  bgColor?: string;
  padding?: boolean;
  children: React.ReactNode;
};

const Showcase = (props: Props) => {
  const { bgColor, id, children, padding } = props;

  return (
    <div
      id={id}
      style={{ backgroundColor: bgColor, padding: padding ? "4rem 10rem" : "" }}
      className="min-h-screen w-full relative"
    >
      {children}
    </div>
  );
};

export default Showcase;
