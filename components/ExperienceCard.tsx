import React from 'react';
import { motion } from "framer-motion";

type Props = {}

export default function ExperienceCard({}: Props){
    return (

      <article className="flex flex-col rounded-lg items-center space-y-7
      flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929]
      p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200
      overflow-hidden">
          <motion.img
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center" src="https://avatars.githubusercontent.com/u/79570234?v=4" alt="" />
            <div>
              <h4 className="text-4xl font-light">NINE COM</h4>
              <p className="font-bold text-2xl mt-1">프론트 팀원</p>
              <div className="flex space-x-2 my-2">
                {/*Tech Used*/}
              </div>
              <p className="uppercase py-5 text-gray-300">2021 - Present</p>
              <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>자격증 정보 페이지 개발</li>
                <li>Vue & Nuxt 2/3</li>
                <li>REACT 18 & NEXT 13</li>
                <li>Python</li>
                <li>Kotlin</li>
              </ul>
            </div>
        </article>
    )
}