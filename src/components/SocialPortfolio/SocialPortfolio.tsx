import React from "react";
import Link from "next/link";
import Arrow from "../assets/Arrow/Arrow";

const SocialPortfolio = () => {
  return (
    <div className="w-full rounded-xl bg-black text-xl py-6 px-8 relative my-12">
      <p>Social Portfolio</p>
      <div className="absolute top-4 right-3"><Arrow /></div>
    </div>
  );
};

export default SocialPortfolio;
