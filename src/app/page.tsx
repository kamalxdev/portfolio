"use client";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function Home() {
  useEffect(() => {
    gsap.to(".main .head .name-heading .name", {opacity:1,stagger: 0.1,y: -50, duration: 1});
    gsap.to(".main .head .title-heading .title", {opacity:1,stagger: 0.08,y: -50, duration: 1});
    // gsap.to(".main .head .title-heading .title", {stagger: 0.3,y: -50, duration: 5});
    // gsap.from(".name", { y: 50, stagger: 0.3, duration: 5 });
  },[]);
  return (
    <>
      <section className="main relative w-screen h-screen">
        <div className=" bg-blue-500">
          <video
            autoPlay
            loop
            muted
            className="h-screen w-screen object-cover bg-red-500"
          >
            <source src="/main.mp4" type="video/mp4" />
          </video>
          </div>
          <div className="absolute top-10 left-10 w-full h-full z-50 text-[#00B068] font-semibold text-2xl">
            <h1>portFolio</h1>
          </div>
          <div className="absolute bottom-24 left-10 head">
            <h1 className="text-white text-9xl name-heading">
              <span className=" inline-block name opacity-0">K</span>
              <span className=" inline-block name opacity-0">a</span>
              <span className=" inline-block name opacity-0">m</span>
              <span className=" inline-block name opacity-0">a</span>
              <span className=" inline-block name opacity-0">l</span>&nbsp;
              <span className=" inline-block name opacity-0">S</span>
              <span className=" inline-block name opacity-0">i</span>
              <span className=" inline-block name opacity-0">n</span>
              <span className=" inline-block name opacity-0">g</span>
              <span className=" inline-block name opacity-0">h</span>
            </h1>
            <h1 className="text-[#00B068] text-5xl title-heading">
              <span className="title opacity-0 inline-block">W</span>
              <span className="title opacity-0 inline-block">e</span>
              <span className="title opacity-0 inline-block">b</span>&nbsp;
              <span className="title opacity-0 inline-block">D</span>
              <span className="title opacity-0 inline-block">e</span>
              <span className="title opacity-0 inline-block">v</span>
              <span className="title opacity-0 inline-block">e</span>
              <span className="title opacity-0 inline-block">l</span>
              <span className="title opacity-0 inline-block">o</span>
              <span className="title opacity-0 inline-block">p</span>
              <span className="title opacity-0 inline-block">e</span>
              <span className="title opacity-0 inline-block">r</span>
            </h1>
          </div>
      </section>
    </>
  );
}
