type Props = {
  title: string;
  description: string;
  image: string;
  path: string;
};

const ServiceCard = (props: Props) => {
  const { title, description, image } = props;

  return (
    <div
      // to={path}
      className="rounded shadow-lg bg-white overflow-hidden hover:scale-105 transition relative"
    >
      <img
        className="w-full object-cover aspect-video"
        src={image}
        alt="service"
      />
      <div className="px-6 pt-4 pb-20">
        <h3 className="font-bold mb-2">{title}</h3>
        <p>{description}</p>
        {/* <div>
          <p className="text-green-700 flex justify-end absolute bottom-6 right-6">
            Learn More
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default ServiceCard;
