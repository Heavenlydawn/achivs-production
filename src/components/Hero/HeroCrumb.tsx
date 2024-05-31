import React from "react";
import Image from "next/image";
import Arrow from "../assets/Arrow/Arrow";

interface PortProps {
  key: number;
  image: any;
  text: string;
}
const HeroCrumb: React.FC<PortProps> = ({ image, text }) => {
  return (
    <div className="w-36 h-36 md:w-60 md:h-60 lg:w-[334px] lg:h-[334px] relative overflow-hidden">
      <Image src={image} alt={text} className="rounded-xl 
      w-full h-full transition-transform duration-300 
      ease-in-out transform hover:scale-110" />

      <div className="absolute top-1 right-2">
        <Arrow />
      </div>
      <h3 className="text-xl absolute left-3 bottom-2">{text}</h3>
    </div>
  );
};

export default HeroCrumb;
