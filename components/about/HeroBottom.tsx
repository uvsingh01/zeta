import Image from "next/image";
import React from "react";

const HeroBottom = () => {
  return (
    // <div className="h-auto w-full">
      <Image
        src="zero.webp"
        height="250"
        width="250"
        alt="no playstore"
        className="h-auto w-full"
      />
    // </div>
  );
};

export default HeroBottom;
