import ShowcaseImage from "../assets/showcase.jpg";
import Showcase from "../components/Showcase";
import ServiceCard from "../components/ServiceCard";
import Form from "../components/Form";
import TreeImage from "../assets/trees.jpg";
import AboutImage from "../assets/about.png";
import Button from "../components/Button";

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
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-10 md:px-40"
          style={{ top: "55%" }}
        >
          <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold text-center text-white">
            Northeast Ohio's Premier Full Service Lawn and Landscaping Provider
          </h1>
          <p className="my-6 text-center" style={{ color: "white" }}>
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
              <Button>Services</Button>
            </a>
            <a href="#contact">
              <Button highlight>Get a Quote</Button>
            </a>
          </div>
        </div>
      </Showcase>
      <Showcase id="services" bgColor="#FAFDFB" padding>
        <div className="flex flex-col items-center px-2 pt-24 pb-6">
          <h1 className="font-bold text-6xl">Services</h1>
          <p>Got grass?</p>
          <div className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                path={"/services/mowing"}
                title="Mowing"
                description="i mow grass"
                image={TreeImage}
              />
              <ServiceCard
                path={"/services/mowing"}
                title="Mowing"
                description="i mow grass"
                image={TreeImage}
              />
              <ServiceCard
                path={"/services/mowing"}
                title="Mowing"
                description="i mow grass"
                image={TreeImage}
              />
              <ServiceCard
                path={"/services/mowing"}
                title="Mowing"
                description="i mow grass"
                image={TreeImage}
              />
              <ServiceCard
                path={"/services/mowing"}
                title="Mowing"
                description="i mow grass"
                image={TreeImage}
              />
              <ServiceCard
                path={"/services/mowing"}
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
          <div className="flex flex-wrap gap-8 items-center justify-center">
            <div
              style={{ maxWidth: "30rem" }}
              className="text-center md:text-left"
            >
              <h3 className="text-green-800 text-xl my-4">
                About First Choice Lawn & Landscape
              </h3>
              <h1 className="font-bold text-3xl my-4">
                We are Summit County's premier landscape maintenance partner.
              </h1>
              <p className="my-4 text-gray-700">
                We are driven to be trailblazers in the green Industry, setting
                the standard for quality, innovation, and cultivating a positive
                team culture.
              </p>
              <p className="my-4 text-gray-700">
                With a strong focus on providing exceptional lawn care,
                landscaping, and snow removal services, we prioritize customer
                satisfaction by delivering outstanding customer service from
                start to finish.
              </p>
              <p className="my-4 text-gray-700">
                We value open communication, promptly addressing any concerns,
                and ensuring our clients have a positive and enjoyable
                experience with us.
              </p>
              <p className="text-green-800 text-xl mt-4">Jayce Dippel</p>
              <p className="font-bold">
                Owner, First Choice Lawn and Landscape, LLC
              </p>
            </div>
            <img
              className="cover-image rounded-lg shadow-lg"
              style={{ maxHeight: "30rem" }}
              src={AboutImage}
              alt="first choice loading mulch"
            />
          </div>
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
