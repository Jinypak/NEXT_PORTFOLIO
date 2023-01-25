import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
// import { urlFor } from "../sanity";
// import { PageInfo } from "../typings";
import BackgroundCircles from "./BackgroundCircles";

type Props = {
};
  function Hero() {
    const [text, count] = useTypewriter({
      words: [
        `Hi, The name's JIN`,
        "Guy-who-loves-Coffee.tsx",
        "But-Love-Code-More...",
      ],
      loop: true,
      delaySpeed: 2000,
    });
    return (
      <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <img
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
          src="https://avatars.githubusercontent.com/u/79570234?v=4"
          alt=""
        />
        <div className="z-20 relative">
          <h2 className="tracking-[15px] text-sm uppercase text-gray-500 pb-2">
            {/*{pageInfo?.role}*/}
          </h2>
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>

          <div className="pt-5">
            <Link href="#about">
              <button className="heroButton">About</button>
            </Link>

            <Link href="#experience">
              <button className="heroButton">Experience</button>
            </Link>

            <Link href="#skills">
              <button className="heroButton">Skills</button>
            </Link>

            <Link href="#projects">
              <button className="heroButton">Projects</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

export default Hero;
