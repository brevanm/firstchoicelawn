type Props = {
  children: React.ReactNode;
};

const Chip = (props: Props) => {
  const { children } = props;

  return (
    <div className="flex h-[24px] whitespace-nowrap items-center justify-between rounded-[12px] bg-fcll-green px-[12px] py-0 leading-loose text-white text-xs shadow-none">
      {children}
    </div>
  );
};

export default Chip;
