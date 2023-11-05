import { useParams } from "react-router-dom";
import showcase from "../assets/showcase.jpg";

const ServicePage = () => {
  const { name } = useParams();

  return (
    <>
      <div className="w-full h-64 lg:h-96 relative">
        <img
          className="w-full object-cover h-full"
          src={showcase}
          alt="placeholder"
        />
        <h1 className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-white">
          {name}
        </h1>
      </div>
      <section className="px-40 py-20">
        <p>body of page here</p>
      </section>
    </>
  );
};

export default ServicePage;
