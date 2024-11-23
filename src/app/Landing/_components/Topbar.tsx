

import Image from "next/image";
import { Link as ScrollLink, Element } from "react-scroll";
import Link from "next/link"; 
import Logo from "../../assets/logo.svg"

const TopBar = () => {

    return (
      <div className="w-full h-full">
            <Element
        name="top"
        className="overflow-hidden rounded-[6px] top-5 sticky md:mx-auto z-50 md:w-4/5 lg:w-[78%] bg-neutral-950/25 flex items-center justify-between py-6 px-4 md:px-8 mx-6"
      >
        <Link href="/">
            <Image
              src={Logo}
              alt="Digifire Logo"
              width={1000}
              height={1000}
              className="w-40"
            />
        </Link>
        <Link
            href={"/contact"}
            className="
  py-3 
  px-6
  text-lg 
  hover:bg-blue-500
  rounded-[6px]
  border-2
  border-black
  text-white
  bg-slate-400
  transition
  duration-200
     hover:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] "
          >
            Book a call
          </Link>
      </Element>
        </div>
    )
}

export default TopBar