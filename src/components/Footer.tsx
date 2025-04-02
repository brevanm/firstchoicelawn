import { Footer as FlowbiteFooter } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import Slider from 'react-slick';
import { NextArrow } from "./carousel/NextArrow";
import { PrevArrow } from "./carousel/PrevArrow";
import AmpLightingLogo from "../assets/gif-500l.gif";
import OhioLandscapeAssocLogo from "../assets/ola.png";

const Footer = () => {
  var sliderSettings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <FlowbiteFooter container>
      <div className="w-full px-6 md:px-40 pt-2">
        <Slider {...sliderSettings}>
          <a href="https://www.amplighting.com" target="_blank" className='px-2'>
            <div className="h-16 flex items-center">
              <img className='m-auto max-h-16' src={AmpLightingLogo} />
            </div>
          </a>
          <a href="https://www.ohiolandscapers.org/" target="_blank" className='px-2'>
            <div className="h-16 flex items-center">
              <img className='m-auto max-h-16' src={OhioLandscapeAssocLogo} />
            </div>
          </a>
        </Slider>
        <FlowbiteFooter.Divider />
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 gap-8">
          <div>
            <a href="/">
              <img
                className="w-32"
                src="logo-winter.png"
                alt="logo"
              />
            </a>
          </div>
          <div className="flex gap-8 sm:mt-4" >
            {/*  <div>
              <FlowbiteFooter.Title title="Company" />
              <FlowbiteFooter.LinkGroup col>
              </FlowbiteFooter.LinkGroup>
            </div> */}
            <div className="grid grid-cols-1 gap-8  sm:grid-cols-1 sm:gap-6">
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
        </div>
        <FlowbiteFooter.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FlowbiteFooter.Copyright
            by="First Choice Lawn & Landscape"
            year={new Date().getFullYear()}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FlowbiteFooter.LinkGroup>
              <FlowbiteFooter.Link href="/privacy">Privacy Policy</FlowbiteFooter.Link>
            </FlowbiteFooter.LinkGroup>
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
};

export default Footer;
