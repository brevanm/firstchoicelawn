import ShowcaseImage from "../assets/IMG_2177.jpeg.jpg";
import Showcase from "../components/Showcase";
import ServiceCard from "../components/ServiceCard";
import Form from "../components/Form";
import TreeImage from "../assets/services/trees.jpg";
import LeavesImage from "../assets/services/leaves.jpeg";
import MowingImage from "../assets/services/mowing.jpeg";
import AboutImage from "../assets/about.png";
import Button from "../components/Button";

const HomePage = () => {
  return (
    <>
      <Showcase>
        <img
          style={{
            objectFit: "cover",
            objectPosition: "0% 35%",
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
            First Choice Lawn & Landscape
          </h1>
          <p className="my-6 text-center" style={{ color: "white" }}>
            Akron's premier commercial and residential grounds maintenance
            company. Since 2020, First Choice Lawn & Landscape has proudly
            served the Barberton, Norton, Wadsworth, & surrounding areas. We
            offer a range of residential and commercial grounds maintenance
            solutions and are your trusted partner for all your lawn & landscape
            needs.
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
          <p className="text-green-800">Design, Build & Maintain</p>
          <div className="pt-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:auto-rows-fr w-full">
              <ServiceCard
                path={"/service/mowing"}
                title="Mowing & Grounds Maintenance"
                description="We aim to provide superior weekly grounds maintenance & mowing services to both commercial and residential clients. Our lawn care services are designed to keep your lawn healthy, green, and well maintained throughout the season."
                image={MowingImage}
                bullets={[
                  "Lawn Maintenance",
                  "Bed Maintenance",
                  "Core Aeration",
                ]}
              />
              <ServiceCard
                path={"/service/mowing"}
                title="Spring & Fall Cleanups"
                description="Our spring & fall cleanups are the perfect way to get your property ready for the changing seasons. We’ll remove all the debris that have accumulated over the winter and prepare your property for the warmer weather ahead. We offer full offsite leaf cleanup too! We work with many clients to ensure their property is clean year around."
                image={LeavesImage}
                bullets={[
                  "Leaf Removal",
                  "Ornamental Grass Cutback",
                  "Shrub Trimming",
                ]}
              />
              <ServiceCard
                path={"/service/mowing"}
                title="Landscape Maintenance & Enhancements"
                description="Transform your outdoor space with our professional landscaping services. Whether you’re looking to update your existing landscape or are starting from scratch, our team will work with you to create a solution tailored to your needs."
                image={TreeImage}
                bullets={[
                  "Landscape Design",
                  "Mulch/Rock Installation",
                  "Shrub Trimming",
                  "Seeding/Straw",
                ]}
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
              {/* <h3 className="text-green-800 text-xl my-4">
                About First Choice Lawn & Landscape
              </h3> */}
              <p className="my-4 font-bold">A word from our owner...</p>
              <p className="my-4 text-gray-700">
                I started this business as a kid with nothing more than a push
                mower in the bed of a truck. I never thought we'd grow into the
                company we are today and I attribute that to our amazing
                clients.
              </p>
              <p className="my-4 text-gray-700">
                As our company and services have expanded, our quality has
                remained the same. We have a team of dedicated professionals
                that is committed to providing the best possible service to our
                clients.
              </p>
              <p className="my-4 text-gray-700">
                We welcome you to experience the best we have to offer. Reach
                out to one of our team members today.
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
