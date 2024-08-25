"use client";
import { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
// import SplitText from ""
export default function Home() {
  useEffect(() => {
    var t1 = gsap.timeline();
    t1.to(".namaskar", { duration: 1, opacity: 1, y: -50 })
      .to(".namaskar", { duration: 1, opacity: 0, y: -100 })
      .to(".welcome", { duration: 1, opacity: 1, y: -50 })
      .to(".welcome", { duration: 1, opacity: 0, y: -100 })
      .to(".main-section", { duration: 1, opacity: 1 });

    gsap.to(".nav-links", { duration: 1, opacity: 1, y: 5, delay: 4 });

    gsap.to('.name', {
      y: -50,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      delay:4
    })
  }, []);
  const nav_links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "/",
    },
    {
      name: "Projects",
      href: "/",
    },
    {
      name: "Contact",
      href: "/",
    },
  ];
  return (
    <>
      <main className="main relative w-screen h-dvh text-[#ece7e1]">
        <section className="absolute top-0 left-0 flex justify-center items-center w-full h-screen z-50 text-white font-semibold text-5xl bg-black font-['grandslang']">
          <h1 className="absolute namaskar opacity-0 translate-y-50">
            Namaskar
          </h1>
          <h1 className=" absolute welcome opacity-0 translate-y-50">
            Welcome
          </h1>
        </section>
        <section className="absolute top-0 left-0 flex justify-center items-center w-full h-full z-50 text-white font-semibold text-5xl main-section opacity-0">
          <video autoPlay loop muted className="h-screen w-screen object-cover">
            <source src="/space.mp4" type="video/mp4" />
          </video>
          <nav className="absolute top-0 left-0 font-['grandslang'] text-xl flex w-full justify-center flex-wrap items-center md:justify-between px-20 border-b border-gray-600 py-5 overflow-hidden">
            <Image
              src={"/logo.png"}
              alt="Kamal Singh"
              width={30}
              height={30}
              className=" "
            />
            <div className=" flex gap-4 bg-transparent nav-links opacity-0 translate-y-10">
              {nav_links.map((link) => (
                <Link
                  href={link.href}
                  className="hover:italic hover:underline decoration-1 underline-offset-4 transition"
                  key={link.name}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
          <div className="absolute font-['grandslang'] text-xs md:text-sm -rotate-90 -left-16 opacity-60">
            <h3>&larr; Swipe down to know more</h3>
          </div>
          <section className="absolute w-full bg-transparent -bottom-3 b-20 flex justify-center font-['grandslang'] text-9xl lg:text-[12rem] 2xl:text-[15rem] flex-wrap">
            <h1 className=" name opacity-0">
              Kamal
            </h1>&nbsp;
            <h1 className=" name opacity-0">
              Singh
            </h1>
          </section>
        </section>
      </main>
    </>
  );
}
