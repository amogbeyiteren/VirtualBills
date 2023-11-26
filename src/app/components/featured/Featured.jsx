"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CircleFill } from "react-bootstrap-icons";
import { Percent } from "react-bootstrap-icons";
import { PlusLg } from "react-bootstrap-icons";
import { CreditCardFill } from "react-bootstrap-icons";
import CountUp from 'react-countup';

const Featured = () => {
  return (
    <div className="min-h-[90vh] bg-white w-screen flex pb-[80px]">
      <div className="flex-1 flex flex-row justify-center items-center gap-10 flex-wrap">
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1.0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.0 }}
          className="w-[300px] h-[400px] flex flex-col justify-center items-center shadow-md rounded-lg bg-[##fffdfe]"
        >
          <span className="w-[70px] h-[70px] border-2 border-[#590D22] rounded-full flex items-center justify-center text-[#590D22] text-4xl mb-4 ">
            <CircleFill />
          </span>
          <span className="font-semibold text-2xl text-center text-[#800F2F]">
            A Single
          </span>
          <span className="text-center">
            consolidated communications and payments platform
          </span>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1.0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.0 }}
          className="w-[300px] h-[400px] flex flex-col justify-center items-center shadow-md rounded-lg bg-[##fffdfe]"
        >
          <span className="w-[70px] h-[70px] border-2 border-[#590D22] rounded-full flex items-center justify-center text-[#590D22] text-4xl mb-4 ">
            <Percent />
          </span>
          <span className="font-semibold text-2xl text-center text-[#800F2F]">
          <CountUp end={19} suffix="%" duration={3.5} enableScrollSpy={true}/>
          </span>
          <span className="text-center">
          reduction of staff time spent on payment          </span>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1.0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.0 }}
          className="w-[300px] h-[400px] flex flex-col justify-center items-center shadow-md rounded-lg bg-[##fffdfe]"
        >
          <span className="w-[70px] h-[70px] border-2 border-[#590D22] rounded-full flex items-center justify-center text-[#590D22] text-5xl mb-4">
            <PlusLg />
          </span>
          <span className="font-semibold text-2xl text-center text-[#800F2F]">
          <CountUp end={100} suffix="+" duration={5} enableScrollSpy={true}/>
          </span>
          <span className="text-center">
          pre-built integrations to future proof your systems          </span>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1.0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.0 }}
          className="w-[300px] h-[400px] flex flex-col justify-center items-center shadow-md rounded-lg bg-[##fffdfe]"
        >
          <span className="w-[70px] h-[70px] border-2 border-[#590D22] rounded-full flex items-center justify-center text-[#590D22] text-4xl mb-4 ">
            <CreditCardFill />
          </span>
          <span className="font-semibold text-2xl text-center text-[#800F2F]">
          Payment
          </span>
          <span className="text-center">
          made easy and convenient
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Featured;
