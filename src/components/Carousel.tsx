import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TreeImage from "../assets/services/trees.jpg";
import LeavesImage from "../assets/services/leaves.jpeg";
import MowingImage from "../assets/services/mowing.jpeg";
import AboutImage from "../assets/about.jpeg";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const images = [TreeImage, LeavesImage, MowingImage, AboutImage];

const Carousel = () => {
  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <AiFillCaretRight
        className={className}
        style={{ ...style, display: 'block', fill: '#54784A' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <AiFillCaretLeft
        className={className}
        style={{ ...style, display: 'block', fill: '#54784A' }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  return (
    <div className='relative'>
      <Slider {...settings}>
        {images.map((img) => (
          <div className='px-2'>
            <img className='h-96 w-full object-cover rounded-lg drop-shadow' src={img} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
