"use client"

import Hero from "./Landing/_components/Hero";
import Services from "./Landing/_components/Service";
import { HorizontalScrollBar } from "./Landing/_components/ScrollBar";
import Process from "./Landing/_components/Process";
import { Features } from "./Landing/_components/Features";
import Footer from "./Landing/_components/footer";
import TopBar from "./Landing/_components/Topbar";

export default function Home() {
  return (
    <div>
      <TopBar />
      <Hero />
      <Services />
      <section className="pb-20">
      <HorizontalScrollBar />
      </section>
      <Process />
      <Features />
      <Footer />
    </div>
  )
}
