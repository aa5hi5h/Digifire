"use client"
import Image from "next/image";
import { Link as ScrollLink, Element } from "react-scroll";
import Logo from "../app/assets/logo.svg";
import Link from "next/link";  // Added this import
import TopBar from "./Landing/_components/Topbar";
import Hero from "./Landing/_components/Hero";

export default function Home() {
  return (
    <div className=" inset-0 py-4 text-white top-0 z-[-2] h-full w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <TopBar />
      <Hero />
    </div>
  )
}
