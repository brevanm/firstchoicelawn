import ShowcaseImage from "../assets/showcase.jpg";
import Showcase from "../components/Showcase";
import ServiceCard from "../components/ServiceCard";
import Form from "../components/Form";
import TreeImage from "../assets/trees.jpg";

const HomePage = () => {
  return (
    <>
      <Showcase>
        <img
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100vh",
            margin: "0",
            padding: "0",
            filter: "brightness(50%) contrast(85%)",
          }}
          src={ShowcaseImage}
          alt="random"
        />
        <div
          style={{
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "70%",
          }}
        >
          <h1
            style={{
              textAlign: "center",
              color: "white",
              fontSize: "4rem",
            }}
          >
            Northeast Ohio's Premier Full Service Lawn and Landscaping Provider
          </h1>
          <p style={{ color: "white" }}>
            Welcome to Leadway Landscaping, your full-service landscaping
            provider. We take pride in delivering unparalleled lawn care,
            top-tier landscaping services, and dependable residential snow
            removal solutions to our valued clients in Delaware County,
            Pennsylvania.
          </p>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            <a href="#services">
              <button>Services</button>
            </a>
            <button className="text-white">Get a Quote</button>
          </div>
        </div>
      </Showcase>
      <Showcase id="services" bgColor="#FAFDFB" padding>
        <div className="flex flex-col items-center px-2 pt-24 pb-6">
          <h1 className="font-bold text-6xl">Services</h1>
          <p>Got grass?</p>
          <div className="max-w-5xl pt-6">
            <div className="flex flex-wrap justify-between gap-y-8">
              <ServiceCard
                title="Mowing"
                description="i mow grass"
                image={TreeImage}
              />
              <ServiceCard
                title="Mowing"
                description="i mow grass"
                image={TreeImage}
              />
              <ServiceCard
                title="Mowing"
                description="i mow grass"
                image={TreeImage}
              />
              <ServiceCard
                title="Mowing"
                description="i mow grass"
                image={TreeImage}
              />
              <ServiceCard
                title="Mowing"
                description="i mow grass"
                image={TreeImage}
              />
              <ServiceCard
                title="Mowing"
                description="i mow grass"
                image={TreeImage}
              />
            </div>
          </div>
        </div>
      </Showcase>
      <Showcase id="about" padding>
        <div className="flex flex-col items-center px-2 pt-24 pb-6">
          <h1 className="font-bold text-6xl">About</h1>
          <p>TODO</p>
        </div>
      </Showcase>
      <Showcase id="contact" bgColor="#FAFDFB" padding>
        <div className="flex flex-col items-center px-2 pt-24 pb-6">
          <h1 className="font-bold text-6xl">Contact</h1>
          <p>330-907-7556</p>
        </div>
        <Form />
      </Showcase>
    </>
  );
};

export default HomePage;
