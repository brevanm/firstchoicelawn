import showcase from "../assets/showcase.jpg";
import CareersContactForm from "../components/CareersContactForm";
import Showcase from "../components/Showcase";

const CareersPage = () => {

  return (
    <>
      <Showcase >
        <img
          style={{
            objectFit: "cover",
            objectPosition: "0% 30%",
            width: "100%",
            height: "60vh",
            margin: "0",
            padding: "0",
            filter: "brightness(50%) contrast(85%)",
          }}
          src={showcase}
          alt="random"
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-10 md:px-40 max-w-screen-xl"
          style={{ top: "51%" }}
        >
          <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold text-center text-white">
            Careers at First Choice Lawn & Landscape
          </h1>
          <p className="my-6 text-center text-white">
          First Choice Lawn & Landscape LLC is the perfect choice for workers looking for a company that values customer service and satisfaction. 
          With over ten years of experience in the landscape construction and maintenance field, 
          company owner Jayce is committed to providing a great experience from start to finish for our clients and employees alike.
          </p>
        </div>
      </Showcase>
      <Showcase padding>
        <div className="flex flex-col items-start px-2 pt-24 pb-6 max-w-screen-xl m-auto">
            <h1 className="font-bold text-4xl">Why work with First Choice Lawn & Landscape?</h1>
            <hr className="w-24 h-1 bg-fcll-green rounded-full mt-4 border-none" />
            <p className="pt-6 w-full">
            First Choice Lawn & Landscape is a company in Summit County, OH, that is dedicated to providing its employees with a great work environment. 
            We believe that our employees are our most important asset, and we strive to create an atmosphere that is both enjoyable and productive. 
            After all, we believe that happy employees lead to a successful business.
            </p>
            <p className="pt-6 w-full">
            If you are looking for a company that values its employees and offers a great work environment, then look no further than Innovative Lawn & Landscape. 
            Get in touch with us to learn more about our company and how we can help you reach your career goals!
            </p>
        </div>
        </Showcase>
        <Showcase bgColor="#FAFDFB" padding>
          <CareersContactForm />
      </Showcase>
    </>
  );
};

export default CareersPage;