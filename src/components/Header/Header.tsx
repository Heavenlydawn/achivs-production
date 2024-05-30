import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/Logo.jpg";
import Instagram from "../assets/Instagram/Instagram";
import Email from "../assets/Email/Email";
import Whatsapp from "../assets/Whatsapp/Whatsapp";
import Youtube from "../assets/Youtube/Youtube";
import Behence from "../assets/Behence/Behence";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h3 className="font-sans text-2xl">Contact</h3>
        <br />
        <div className="flex gap-4">
          <Instagram />
          <Email />
          <Whatsapp />
          <Youtube />
          <Behence />
        </div>
      </div>

      <div>
        <Image
          src={Logo}
          alt="Logo"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
    </header>
  );
};

export default Header;
