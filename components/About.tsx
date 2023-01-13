import React from 'react';
import { motion } from "framer-motion";

type Props = {}

export default function About({}: Props){
    return (
        <div className="flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

          <motion.img
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
            src="https://avatars.githubusercontent.com/u/79570234?v=4"
            alt="profile"
            className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[500px] xl:h-[500px]"
          />

          <div className="space-y-10 px-0 md:px-10">
            <div className="text-4xl font-semibold">
              Hello, I'm <span className="text-[#F7AB0A]">Jin</span>
            </div>
          </div>

        </div>
    )
}