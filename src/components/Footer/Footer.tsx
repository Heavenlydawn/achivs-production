import React from "react";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2 className="text-3xl mb-24">CATEGORY</h2>
        <ul className="leading-10 text-lg text-white list-disc">
          <li>Studio (Photography, Cinematography)</li>
          <li>Branding</li>
          <li>PR</li>
          <li>General Contract</li>
          <li>Design</li>
          <li>Training</li>
        </ul>
      </div>

      <div className="mt-24">
        <h2 className="text-5xl mb-12">ACHIV&apos;s PRODUCTION</h2>
        <h3 className="text-3xl leading-10 font-bold">MISSION</h3>
        <p className="text-lg leading-10">
          To capture and preserve the beauty of life&apos;s moments with creativity
          and precision, providing our clients with stunning visual memories
          that tell their unique stories. We strive to deliver exceptional
          quality, personalized service, and a seamless experience from start to
          finish.
        </p>
      </div>
      <div>
        <h3 className="text-3xl leading-10 my-12 font-bold">VISION</h3>
        <p className="text-lg leading-10">
          To capture and preserve the beauty of life&apos;s moments with creativity
          and precision, providing our clients with stunning visual memories
          that tell their unique stories. We strive to deliver exceptional
          quality, personalized service, and a seamless experience from start to
          finish.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
