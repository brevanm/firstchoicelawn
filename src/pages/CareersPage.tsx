import showcase from "../assets/showcase.jpg";
import CareersContactForm from "../components/CareersContactForm";
import Showcase from "../components/Showcase";
import ZapierForm from "../components/ZapierForm";

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
          With over five years of experience in the lawn and landscape industry, we are committed to providing a great experience for our clients and employees alike.
          </p>
        </div>
      </Showcase>
      <Showcase  padding>
        <div className="flex flex-col items-start px-2 pt-24 pb-12 max-w-screen-xl m-auto">
            <h1 className="font-bold text-4xl">Why work with First Choice Lawn & Landscape?</h1>
            <hr className="w-24 h-1 bg-fcll-green rounded-full mt-4 border-none" />
            <p className="pt-6 w-full">
            First Choice Lawn & Landscape is a company in Summit County, OH, that is dedicated to providing its employees with a great work environment. 
            We believe that our employees are our most important asset, and we strive to create an atmosphere that is both enjoyable and productive. If you’re looking for a new place to call home, then look no further than First Choice Lawn & Landscape. 
            Get in touch with us to learn more about our company and how we can help you reach your career goals!
            </p>
        </div>
        </Showcase>
      <Showcase bgColor="#FAFDFB" padding>
        <div className="flex flex-col items-start px-2 pb-24 pt-12 max-w-screen-xl m-auto">
            <h1 className="font-bold text-4xl">We {'>'} Me</h1>
            <hr className="w-24 h-1 bg-fcll-green rounded-full mt-4 border-none" />
            <p className="pt-6 w-full">
            Since the inception of First Choice, company owner Jayce Dippel has strived to implement a culture called "We over Me." "We over Me", 
            is the idea that while we are all individuals, our success is defined by how we perform as a collective. In doing so, First Choice has built a team-oriented culture that has proven crucial to our organizational success. 
            It takes all of us working together to build lasting relationships with our clients and to help foster growth within our business. Together, we make progress.
            </p>
        </div>
        </Showcase>
        <Showcase bgColor="#54784A" padding>
          {/* <CareersContactForm /> */}
          <h1 className="font-bold text-4xl md:text-5xl text-white text-center mt-12">Reach out today!</h1>
          <ZapierForm />
      </Showcase>
    </>
  );
};

export default CareersPage;