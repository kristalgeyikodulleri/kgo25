import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CustomSlider = ({ prefix, length, isJPG = false }) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    // Eğer Slick'in container'ında overflow:hidden varsa, aşağıdaki class ile visible yapabilirsiniz.
    className: "lg:px-6 flex items-center overflow-visible ",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows: true
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {length?.map((path, key) => {
        return (
          <img
            key={key}
            src={`/images/${prefix}/${path}.${isJPG ? "jpg" : "png"}`}
            alt={prefix}
            className="w-full h-full object-contain p-2 max-h-[500px]
                       transition-transform duration-300 ease-in-out 
                       hover:scale-110" // hover durumunda %110 ölçeklendir
          />
        );
      })}
    </Slider>
  );
};

export default CustomSlider;
