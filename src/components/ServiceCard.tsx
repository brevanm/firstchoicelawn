import { Link } from "react-router-dom";
type Props = {
  title: string;
  description: string;
  image: string;
  path: string;
};

const ServiceCard = (props: Props) => {
  const { title, description, image, path } = props;

  return (
    <Link
      to={path}
      className="rounded shadow-lg bg-white overflow-hidden hover:scale-105 transition cursor-pointer"
    >
      <img
        className="w-full object-cover aspect-video"
        src={image}
        alt="service"
      />
      <div className="px-6 py-4">
        <h3 className="font-bold mb-2">{title}</h3>
        <p>{description}</p>
        <div>
          <p className="text-green-700 flex justify-end">Learn More</p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
