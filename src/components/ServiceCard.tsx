type Props = {
  title: string;
  description: string;
  image: string;
  path: string;
  bullets: string[];
};

const ServiceCard = (props: Props) => {
  const { bullets, title, description, image } = props;

  return (
    <div
      // to={path}
      className="rounded shadow-lg bg-white overflow-hidden md:hover:scale-105 transition relative"
    >
      <img
        className="w-full object-cover aspect-video"
        src={image}
        alt="service"
      />
      <div className="px-6 pt-4 pb-8">
        <h3 className="font-bold mb-2 text-start text-xl">{title}</h3>
        <p className="text-start">{description}</p>
        <p className="mt-4 font-bold">Key Services:</p>
        <ul className="firstchoice-bullet ml-4">
          {bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
