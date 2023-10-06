import NavBar from "./components/NavBar";
import ShowcaseImage from "./assets/showcase.jpg";
import Showcase from "./components/Showcase";
import ServiceCard from "./components/ServiceCard";

function App() {
  return (
    <>
      <NavBar />
      <Showcase>
        <img
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
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
            top: "40%",
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
            <button>Get a Quote</button>
          </div>
        </div>
      </Showcase>
      <Showcase id="services">
        <h1>Services</h1>
        <ServiceCard
          title="Mowing"
          description="i mow grass"
          image="https://picsum.photos/200/300"
        />
      </Showcase>
      <Showcase id="about">
        <h1 className="underline">about</h1>
      </Showcase>
      <Showcase id="contact">contact</Showcase>
    </>
  );
}

export default App;
