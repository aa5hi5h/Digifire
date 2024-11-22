"use client"
import TopBar from "./Landing/_components/Topbar";
import Hero from "./Landing/_components/Hero";
import Services from "./Landing/_components/Service";
import { HorizontalScrollBar } from "./Landing/_components/ScrollBar";
import Process from "./Landing/_components/Process";
import { Features } from "./Landing/_components/Features";
import Footer from "./Landing/_components/footer";

export default function Home() {
  return (
    <div className=" inset-0 py-4 text-white top-0 z-[-2] h-full w-full bg-neutral-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
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
