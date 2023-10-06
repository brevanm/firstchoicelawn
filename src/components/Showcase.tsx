export type Props = {
  id?: string;
  children: React.ReactNode;
};

const Showcase = (props: Props) => {
  const { id, children } = props;

  return (
    <div
      id={id}
      style={{ height: "100vh", width: "100vw", position: "relative" }}
    >
      {children}
    </div>
  );
};

export default Showcase;
