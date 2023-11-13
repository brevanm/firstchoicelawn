import Chip from "./Chip";

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
        <ul className="flex gap-2 mb-3 overflow-auto no-scrollbar">
          {bullets.map((bullet) => (
            <li key={bullet}>
              <Chip>{bullet}</Chip>
            </li>
          ))}
        </ul>
        <h3 className="font-bold mb-2 text-center">{title}</h3>
        <p className="text-center">{description}</p>
        {/* <div className="flex justify-end flex-wrap absolute bottom-6"> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default ServiceCard;
