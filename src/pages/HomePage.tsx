import { AiTwotoneMail, AiTwotonePhone } from "react-icons/ai";
import ShowcaseImage from "../assets/IMG_2177.jpeg.jpg";
import Showcase from "../components/Showcase";
import ServiceCard from "../components/ServiceCard";
import ServicesContactForm from "../components/ServicesContactForm";
import TreeImage from "../assets/services/trees.jpg";
import LeavesImage from "../assets/services/leaves.jpeg";
import MowingImage from "../assets/services/mowing.jpeg";
import AboutImage from "../assets/about.jpeg";
import Button from "../components/Button";

const HomePage = () => {
  return (
    <>
      <Showcase>
        <img
          style={{
            objectFit: "cover",
            objectPosition: "0% 30%",
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
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-10 md:px-40 max-w-screen-xl"
          style={{ top: "51%" }}
        >
          <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-center text-white">
            First Choice Lawn & Landscape
          </h1>
          <p className="my-6 text-center text-white text-xl md:text-xl xl:text-2xl">
            Akron's premier commercial and residential grounds maintenance
            company
          </p>
          <p className="my-6 text-center text-white">
            Since 2020, First Choice Lawn & Landscape has proudly served the
            Barberton, Norton, Wadsworth, & surrounding areas. We offer a range
            of residential and commercial grounds maintenance solutions and are
            your trusted partner for all your lawn & landscape needs.
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
        <div className="flex flex-col items-center px-2 pt-24 pb-6 max-w-screen-xl m-auto">
          <h1 className="font-bold text-6xl">Services</h1>
          <hr className="w-24 h-1 bg-fcll-green rounded-full mt-4 border-none" />
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
          <h1 className="font-bold text-6xl">About</h1>
          <hr className="w-24 h-1 bg-fcll-green rounded-full mt-4 border-none" />
          <div className="flex flex-wrap gap-8 items-center justify-center mt-8 md:mt-12">
            <div
              style={{ maxWidth: "30rem" }}
              className="text-center md:text-left"
            >
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
              <p className="text-fcll-green text-md mt-4">Jayce Dippel</p>
              <p className="font-bold text-sm">
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
      <Showcase id="contact" bgColor="#54784A" padding>
        <div className="max-w-screen-xl m-auto pb-12">
          <div className="flex flex-col items-center px-2 pt-24 pb-6 text-white">
            <h1 className="font-bold text-6xl">Contact</h1>
            <div className="flex items-center justify-center gap-x-8 gap-y-4 flex-wrap mt-4">
              <a
                href="tel:330-943-2112"
                className="flex items-center gap-2 hover:underline"
              >
                <AiTwotonePhone className="text-2xl text-white" />
                <p>330-943-2112</p>
              </a>
              <a
                href="mailto:office@firstchoicelawnlandscape.com"
                className="flex items-center gap-2 hover:underline"
              >
                <AiTwotoneMail className="text-2xl text-white" />
                <p>office@firstchoicelawnlandscape.com</p>
              </a>
            </div>
          </div>
          <ServicesContactForm />
        </div>
      </Showcase>
    </>
  );
};

export default HomePage;
