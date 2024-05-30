import React from "react";
import HeroCrumb from "./HeroCrumb";
import PortImage1 from "../../../public/images/PortImage1.png";
import PortImage2 from "../../../public/images/PortImage2.png";
import PortImage3 from "../../../public/images/PortImage3.jpg";
import PortImage4 from "../../../public/images/PortImage4.jpg";

const Hero = () => {
  const portImages = [
    {
      key: 1,
      image: PortImage1,
      text: "Profile",
    },
    {
      key: 2,
      image: PortImage2,
      text: "Brand Guide",
    },
    {
      key: 3,
      image: PortImage3,
      text: "",
    },
    {
      key: 4,
      image: PortImage4,
      text: "Support",
    },
  ];
  return (
    <div className="w-[768px] m-auto p-16 mt-24 grid grid-cols-2 items-center justify-center gap-12 bg-[#222] rounded-2xl">
      {portImages.map((portdetails) => (
        <HeroCrumb
          key={portdetails.key}
          image={portdetails.image}
          text={portdetails.text}
        />
      ))}
    </div>
  );
};

export default Hero;
