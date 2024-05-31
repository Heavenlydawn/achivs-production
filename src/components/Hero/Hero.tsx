import React from "react";
import HeroCrumb from "./HeroCrumb";
import PortImage1 from "../../../public/images/PortImage1.png";
import PortImage2 from "../../../public/images/PortImage2.png";
import PortImage3 from "../../../public/images/PortImage3.jpg";
import PortImage4 from "../../../public/images/PortImage4.jpg";
import SocialPortfolio from "../SocialPortfolio/SocialPortfolio";
import Footer from "../Footer/Footer";

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
    <section className="bg-[#222]">
    <div className="w-[768px] m-auto p-16 mt-24 grid grid-cols-2 items-center justify-center gap-12 rounded-2xl">
      {portImages.map((portdetails) => (
        <HeroCrumb
          key={portdetails.key}
          image={portdetails.image}
          text={portdetails.text}
        />
      ))}
   <SocialPortfolio />
    </div>
 <div className="p-16">
 <Footer />
 </div>
    </section>
  );
};

export default Hero;
