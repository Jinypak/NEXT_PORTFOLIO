import React from 'react';
import { motion } from "framer-motion";
import Skill from "./Skill";

type Props = {}

export default function Skills({}: Props){
    return (

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        //   viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      >
          <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
              Skills
          </h3>
          <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">
              Hover over a skill for current proficiency
          </h3>

          <div className="grid grid-cols-4 gap-5">
              <Skill path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpngGRjYX1ca7qAADU3K6eGLj7ShQE3L2otdzfryl_Y9Ht2QRoQKYQbsXd36XIxMbYOw0&usqp=CAU"/>
              <Skill path="https://w.namu.la/s/ef4073a2a2b4b32764761588586e91252083189c535a546218d0d90aaaf1a9a7d3bda94f20a78344c0aa51e7b242b0ed749419e82a8977af956c099710070dd1220d956fb9e8694369efcbc1b0f670db0e06462ccafdca93910fb12c7c7b0ec5"/>
              <Skill path="https://blog.kakaocdn.net/dn/dcBmre/btqVbYzcGFK/w5BtTERbWwTOzaMQx5sJqk/img.png"/>
              <Skill path="https://w.namu.la/s/d07feeb933b619e714c0eb165bb33a762b8194f6b439e500ac118cb1f80e2df4003f4b6fbf12bf66e5217b2ee7199390b40a8d657ee1e0555a1801acd2c39e5e40a8eaf2bad40ca26ecab03bcf8871267bcfbd1befaa0bef44a823e4370b171c"/>

              <Skill path="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"/>
              <Skill path="https://yt3.googleusercontent.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj"/>
              <Skill path="https://nowon.greenart.co.kr/upimage/subject/group5_7.jpg"/>
              <Skill path="https://blog.kakaocdn.net/dn/XsNHt/btrb3m0cuQb/62QmvGg1bUVrI5uZfcWEi1/img.png"/>
          </div>
      </motion.div>
    )
}