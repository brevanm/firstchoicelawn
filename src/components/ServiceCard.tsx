type Props = {
  title: string;
  description: string;
  image: string;
};

const ServiceCard = (props: Props) => {
  const { title, description, image } = props;

  return (
    <div className="service-card">
      <img src={image} alt="service" />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
