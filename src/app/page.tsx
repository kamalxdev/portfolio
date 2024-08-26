"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
// import SplitText from ""
export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    var t1 = gsap.timeline();
    t1.to(".namaskar", { duration: 1, opacity: 1, y: -50 })
      .to(".namaskar", { duration: 1, opacity: 0, y: -100 })
      .to(".welcome", { duration: 1, opacity: 1, y: -50 })
      .to(".welcome", { duration: 1, opacity: 0, y: -100 })
      .to(".main-section", { duration: 1, opacity: 1 });

    gsap.to(".nav-links", { duration: 1, opacity: 1, y: 5, delay: 4 });

    gsap.to(".name", {
      y: -50,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      delay: 4,
    });
  }, []);
  useEffect(() => {
    if (videoRef?.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, [videoRef]);
  const nav_links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
      href: "#kamal",
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
  const tech_icons = [
    {
      name: "HTML",
      src: "/icon/html.svg",
    },
    {
      name: "CSS",
      src: "/icon/css.svg",
    },
    {
      name: "JavaScript",
      src: "/icon/javascript.svg",
    },
    {
      name: "TypeScript",
      src: "/icon/typescript.svg",
    },
    {
      name: "NextJS",
      src: "/icon/nextjs.svg",
    },
    {
      name: "ReactJS",
      src: "/icon/reactjs.svg",
    },
    {
      name: "NodeJS",
      src: "/icon/nodejs.svg",
    },
    {
      name: "Tailwind CSS",
      src: "/icon/tailwindcss.svg",
    },
    {
      name: "MongoDB",
      src: "/icon/mongodb.svg",
    },
    {
      name: "PostgreSQL",
      src: "/icon/postgresql.svg",
    },
    {
      name: "Prisma",
      src: "/icon/prisma.svg",
    },
    {
      name: "Github",
      src: "/icon/github.svg",
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
          <video
            autoPlay
            loop
            muted
            ref={videoRef}
            className="fixed h-screen w-screen object-cover"
          >
            <source src="/space.mp4" type="video/mp4" />
          </video>
          <section className="relative w-full h-full overflow-y-scroll">
            <section className="relative w-full h-full">
              <nav className="relative z-50 top-0 left-0 font-['grandslang'] text-xl flex w-full justify-center flex-wrap items-center md:justify-between px-20 border-b border-gray-600 py-5 overflow-hidden">
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
              <div className="absolute w-full h-full font-['grandslang'] text-xs md:text-sm  opacity-60 flex justify-start items-center -left-16 md:-left-20 bottom-10">
                <h3 className="-rotate-90">&larr; Swipe down to know more</h3>
              </div>
              <div className="relative  h-full w-full bg-transparent pb-20 flex justify-center items-end font-['grandslang'] text-9xl lg:text-[12rem] 2xl:text-[15rem] flex-wrap">
                <span id="about"></span>
                <h1 className=" text-center name opacity-0" id="kamal">Kamal Singh</h1>
              </div>
            </section>
            <section className="relative text-lg md:text-3xl px-10 2xl:px-72 text-center pb-10  after:content-['About'] after:absolute after:block after:text-9xl after:bottom-0 after:left-0 after:text-transparent after:opacity-20 after:z-2 text-content z-20">
              <p className=" relative z-10 font-['grandslang']">
                 I'm a{" "}
                <i className="underline underline-offset-4 decoration-1">
                  Full Stack Web Developer{" "}
                </i>
                &nbsp; currently in my final year of{" "}
                <i className="underline underline-offset-4 decoration-1">
                  BCA{" "}
                </i>
                at{" "}
                <i className="underline underline-offset-4 decoration-1">
                  {" "}
                  IPU University
                </i>
                . With a strong foundation in both front-end and back-end
                technologies, I'm passionate about building dynamic, responsive,
                and user-friendly web applications.
                <br /> <br /> Though I’m just starting out in the professional
                world, I’m eager to find my first opportunity to apply my skills
                in real-world projects. I’m actively looking for job
                opportunities, internships, or freelance projects where I can
                contribute and grow as a developer.
                <br /> <br /> I have a keen interest in learning new
                technologies and staying updated with the latest trends in web
                development.
              </p>
            </section>
            <section className="relative py-10 w-full h-fit gap-0 flex  justify-center items-center  after:content-['Skills'] after:absolute after:block after:text-9xl after:bottom-0 after:left-0 after:text-transparent after:opacity-20 after:z-2 text-content">
                <div className="relative grid grid-cols-3 md:grid-cols-4 gap-10 rounded-full tech-icons z-20">
                  {tech_icons.map((icon) => (
                    <Image
                      src={icon.src}
                      alt={icon.name}
                      width={100}
                      height={100}
                      key={icon.name}
                      className="bg-[#ece7e1] grayscale hover:grayscale-0	 rounded-lg p-2 hover:bg-white hover:p-1 transition-all"
                    />
                  ))}
                </div>
            </section>
          </section>
        </section>
      </main>
    </>
  );
}
