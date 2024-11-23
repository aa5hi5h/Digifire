import React from "react";

import Image from "next/image";
import Link from "next/link";
import ProposalPng from "../../assets/proposal_illustration.png"

function Footer() {
  return (
    <section className="
     my-10 md:py-20 md:w-4/5 lg:w-[78%]  md:mx-auto
    bg-accent rounded-[45px] p-[50px] md:p-[60px] relative">
      <div className="md:pr-[22rem] text-black">
        <p className="text-3xl font-medium">
          Let&apos;s make things happen
        </p>

        <p className="my-10 text-xl">
          Contact us today to learn more about how our digital marketing
          services can help your business grow and succeed online.
        </p>

        <Link
          href="/contact"
          className="py-3 
            px-10
        
            md:px-16
      md:text-xl
      hover:bg-blue-500 
      rounded-[6px]
      border-2 
      border-black 
      dark:border-white 
       bg-[#121212] 
       text-white 
       transition 
       duration-200 
       hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
        >
          Book a Call
        </Link>
      </div>
      <div className="absolute -top-8 right-8 hidden md:block">
        <Image
          src= {ProposalPng}
          alt="proposal illustration"
          width={300}
          height={300}
        />
      </div>
    </section>
  );
}

export default Footer;