import { Footer as FlowbiteFooter } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <FlowbiteFooter container>
      <div className="w-full px-6 md:px-40">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 gap-8">
          <div>
            <a href="#">
              <img
                className="w-32"
                src="https://firstchoicelawnlandscape.com/full-logo.png"
                alt="logo"
              />
            </a>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:mt-4 sm:grid-cols-1 sm:gap-6">
            <div>
              <FlowbiteFooter.Title title="Follow us" />
              <FlowbiteFooter.LinkGroup className="gap-2">
                <FlowbiteFooter.Icon
                  href="https://www.facebook.com/FirstChoiceLawnAndLandscape3306714539/"
                  icon={BsFacebook}
                />
                <FlowbiteFooter.Icon
                  href="https://www.instagram.com/firstchoicelawnandlandscapellc"
                  icon={BsInstagram}
                />
              </FlowbiteFooter.LinkGroup>
            </div>
          </div>
        </div>
        <FlowbiteFooter.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FlowbiteFooter.Copyright
            href="#"
            by="First Choice Lawn & Landscape"
            year={2024}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {/* <FlowbiteFooter.Icon href="#" icon={BsFacebook} />
            <FlowbiteFooter.Icon href="#" icon={BsInstagram} />
            <FlowbiteFooter.Icon href="#" icon={BsTwitter} />
            <FlowbiteFooter.Icon href="#" icon={BsGithub} />
            <FlowbiteFooter.Icon href="#" icon={BsDribbble} /> */}
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
};

export default Footer;
