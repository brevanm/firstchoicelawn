import Showcase from "../components/Showcase"
import showcase from "../assets/showcase.jpg";

const PrivacyPage = () => {

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
            filter: "brightness(50%) contrast(75%)",
          }}
          src={showcase}
          alt="random"
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-10 md:px-40 max-w-screen-xl"
          style={{ top: "55%" }}
        >
          <h1 className="text-6xl font-bold text-center text-white">
            Privacy Policy
          </h1>

        </div>
      </Showcase >
      <Showcase padding bgColor="#FAFDFB" >
      <div className="py-16">
        <h1 className="font-bold text-4xl">Our Privacy Policy</h1>
        <hr className="w-24 h-1 bg-fcll-green rounded-full mt-4 border-none" />
        <p className="my-6">
          No mobile information will be shared with third parties/affiliates for marketing/promotional purposes.
          All the above categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
        </p>
        </div>
      </Showcase>
    </>
  );
}

export default PrivacyPage;
