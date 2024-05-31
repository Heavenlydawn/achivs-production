"use client";
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
          <Link href="/">
            <Instagram />
          </Link>
          <Link href="/">
            <Email />
          </Link>
          <Link href="/">
            <Whatsapp />
          </Link>
          <Link href="/">
            <Youtube />
          </Link>
          <Link href="/">
            <Behence />
          </Link>
        </div>
      </div>

      <div className="w-12 h-12 md:w-36 md:h-36">
        <Image src={Logo} alt="Logo" className="w-full h-full rounded-full" />
      </div>
    </header>
  );
};

export default Header;
