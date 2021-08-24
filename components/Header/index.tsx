import React from "react";
import Image from "next/image";

import header from "../../public/header.svg";
import asterik from "../../public/asterik.svg";
import asterikLeft from "../../public/asterik-left.svg";

const Header: React.FC = () => (
  <header className="mx-4 lg:px-8 lg:py-12">
    <div className="mb-2 sm:mb-16">
      <Image alt="A man can’t have enough base­ment swag" src={header} />
    </div>
    <div className="relative -left-12 lg:-left-12">
      <hr className="border-1 relative lg:w-screen w-150" />
      <p className="text-xl lg:text-4xl whitespace-nowrap">
        A man can’t have enough base­ment swag  —  A man can’t have enough base­ment swag
      </p>
      <hr className="border-1 relative lg:w-screen w-150" />
      <div className="hidden lg:flex absolute left-32 -bottom-28">
        <Image alt="Asterik" src={asterik} />
      </div>
      <div className="hidden lg:flex absolute bottom-3 right-5">
        <Image alt="Asterik" src={asterikLeft} />
      </div>
    </div>
  </header>
);

export default Header;
