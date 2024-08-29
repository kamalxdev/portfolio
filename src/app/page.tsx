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
  const d = new Date();
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
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
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
  const projects_link = [
    {
      banner: "/projects/notes.png",
      title: "Notes",
      description:
        "It is a simple yet powerful note-taking application that allows users to store notes with a title and content locally on their browser. The app supports creating, updating, and deleting notes, and ensures that all data is saved even after the browser is closed, providing a seamless experience",
      live_url: "https://notes.kamalsingh.me/",
      github_url: "https://github.com/kamalxdev/notes",
      teck_stack: ["HTML", "CSS", "JavaScript"],
    },
    {
      banner: "/projects/placeform.png",
      title: "placeForm",
      description:
        "It is a versatile platform for creating forms, quizzes, and surveys with ease. It features a user-friendly interface, allowing customization with various question types and real-time data management. A standout feature is its AI-powered quiz creation, which helps generate quizzes efficiently based on input parameters. This, along with responsive design, makes Placeform ideal for anyone looking to streamline data collection and enhance user engagement.",
      live_url: "https://placeform.kamalsingh.me/",
      github_url: "https://github.com/kamalxdev/placeForm",
      teck_stack: [
        "HTML",
        "CSS",
        "TypeScript",
        "Tailwind CSS",
        "NextJS",
        "MongoDB",
        "Github",
      ],
    },

    {
      banner: "/projects/hubble.png",
      title: "Hubble",
      description:
        "It is a chat application built using WebRTC, WebSocket, and Redis. It provides a comprehensive communication experience with features like text messaging, voice calls, video calls, and real-time status updates, such as live user status and typing indicators. These technologies ensure seamless real-time communication, making Hubble a robust platform for staying connected.",
      live_url: "#not-live-yet",
      github_url: "https://github.com/kamalxdev/Hubble",
      teck_stack: [
        "HTML",
        "CSS",
        "TypeScript",
        "Tailwind CSS",
        "ReactJS",
        "NodeJS",
        "Prisma",
        "PostgreSQL",
        "Github",
      ],
    },
  ];
  // console.log("hello: ",tech_icons.filter((icon)=>"HTML" == icon.name)[0].src);
  const social_media=[
    {
      name:"X",
      link:"https://x.com/devxkamal"
    },
    {
      name:"Linkedin",
      link:"https://www.linkedin.com/in/iamksb/"
    },
    {
      name:"Github",
      link:"https://github.com/kamalxdev"
    },
  ]
  return (
    <>
      <main className="main relative w-screen h-dvh text-[#ece7e1]">
        <section className="absolute top-0 left-0 flex justify-center items-center w-full h-screen z-50 font-semibold text-5xl bg-black font-['grandslang']">
          <h1 className="absolute namaskar opacity-0 translate-y-50">
            Namaskar
          </h1>
          <h1 className=" absolute welcome opacity-0 translate-y-50">
            Welcome
          </h1>
        </section>
        <section className="absolute top-0 left-0 flex justify-center items-center w-full h-full z-50 font-semibold text-5xl main-section opacity-0">
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
                <h1 className=" text-center name opacity-0" id="kamal">
                  Kamal Singh
                </h1>
              </div>
            </section>
            <section className="relative text-lg md:text-3xl px-10 2xl:px-72 text-center pb-10  after:content-['About'] after:absolute after:block after:text-8xl after:bottom-0 after:left-0 after:text-transparent after:opacity-20 after:z-2 text-content z-20">
              <p className=" relative z-10 font-['grandslang']">
                I&apos;m a{" "}
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
                technologies, I&apos;m passionate about building dynamic,
                responsive, and user-friendly web applications.
                <br /> <br /> Though I&apos;m just starting out in the
                professional world, I&apos;m eager to find my first opportunity
                to apply my skills in real-world projects. I&apos;m actively
                looking for job opportunities, internships, or freelance
                projects where I can contribute and grow as a developer.
                <br /> <br /> I have a keen interest in learning new
                technologies and staying updated with the latest trends in web
                development.
              </p>
            </section>
            <section className="relative py-10 w-full h-fit gap-0 flex  justify-center items-center  after:content-['Skills'] after:absolute after:block after:text-8xl after:bottom-0 after:left-0 after:text-transparent after:opacity-20 after:z-2 text-content">
              <div className="relative grid grid-cols-3 md:grid-cols-4 gap-10 rounded-full tech-icons z-20">
                {tech_icons.map((icon) => (
                  <Image
                    src={icon.src}
                    alt={icon.name}
                    width={100}
                    height={100}
                    key={icon.name}
                    title={icon.name}
                    className="bg-[#ece7e1] grayscale hover:grayscale-0 rounded-lg p-2 hover:bg-white hover:p-1 transition-all"
                  />
                ))}
              </div>
            </section>
            <section
              className="relative font-['grandslang'] flex flex-col mx-5 xl:mx-20 mt-20 "
              id="projects"
            >
              <h1 className="w-full flex items-center justify-center xl:text-8xl  pb-5 mb-5 border-b">
                Projects
              </h1>
              <div className="flex flex-col gap-20">
                {projects_link.map((project) => (
                  <div
                    key={project.title}
                    className="relative flex flex-col gap-5"
                  >
                    <span className="flex items-center justify-between flex-wrap gap-5">
                      <h1>{project.title}</h1>
                      <span className="text-lg flex gap-5">
                        <Link
                          href={project.live_url}
                          target="_blank"
                          className="border px-5 py-1 hover:bg-[#ece7e1] hover:text-black transition-all"
                        >
                          See Live
                        </Link>
                        <Link
                          href={project.github_url}
                          target="_blank"
                          className="border px-5 py-1 hover:bg-[#ece7e1] hover:text-black transition-all"
                        >
                          Github Repo
                        </Link>
                      </span>
                    </span>
                    <span className="flex gap-5 lg:gap-20 flex-wrap lg:flex-nowrap">
                      <Image
                        src={project.banner}
                        alt={project.title}
                        width={400}
                        height={400}
                        className=" rounded w-fit h-fit"
                      />
                      <span className="flex flex-col justify-around gap-5">
                        <p className="text-lg">{project.description}</p>
                        <span className="flex gap-3 bg-[#ece7e1] w-fit p-2 px-5 rounded">
                          {project.teck_stack.map((stack) => (
                            <Image
                              src={
                                tech_icons.filter(
                                  (icon) => stack == icon.name
                                )[0]?.src
                              }
                              key={"project" + stack}
                              alt={"stack"}
                              width={30}
                              height={30}
                            />
                          ))}
                        </span>
                      </span>
                    </span>
                  </div>
                ))}
              </div>
            </section>
            <section className="relative flex flex-col items-center justify-center my-20 text-base" id="contact">
              <h1 className="text-5xl font-['grandslang']">Contact me</h1>
              <p className="xl:text-2xl font-['grandslang'] mx-5 xl:mx-64 text-center my-5 mb-10">
                I&apos;m always excited to connect with like-minded individuals and
                potential collaborators. Whether you have an opportunity in mind
                or just want to chat about web development, feel free to reach
                out!
              </p>
              <form className="flex flex-col w-96 gap-5 items-center justify-center">
                <input
                  type="text"
                  className="relative w-full border rounded border-[#ece7e1] bg-transparent p-1 px-3 outline-0 opacity-50"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className="relative w-full border rounded border-[#ece7e1] bg-transparent p-1 px-3 outline-0 opacity-50"
                  placeholder="Email"
                />
                <textarea
                  name=""
                  id=""
                  cols={30}
                  rows={10}
                  className="relative w-full border rounded border-[#ece7e1] bg-transparent p-1 px-3 outline-0 opacity-50"
                  placeholder="Message"
                ></textarea>
                <button
                  type="button"
                  className="border px-7 py-2 hover:bg-[#ece7e1] hover:text-black transition-all"
                >
                  Send
                </button>
              </form>
              <span className="flex flex-col items-center justify-center text-2xl font-['grandslang'] mt-5">
                <p>or</p>
                <p>Send me a direct mail at </p>
                <Link
                  href={"mailto:itskamal.dev@gmail.com"}
                  className="text-3xl underline"
                >
                  itskamal.dev@gmail.com
                </Link>
              </span>
            </section>
            <hr className="opacity-50"/>
            <section className="relative font-['grandslang'] text-lg flex flex-col items-center justify-center my-10 gap-2">
              <span className="flex gap-5">
                {social_media.map((sm)=><Link href={sm.link} className="hover:underline transition-all" key={sm.name}>{sm.name}</Link>)}
              </span>
                <p>&copy; {d.getFullYear()} <Link href={'/'} className="underline">Kamal Singh</Link>. All rights reserved</p>
            </section>
          </section>
        </section>
      </main>
    </>
  );
}
