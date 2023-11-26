"use client";
import React from "react";
import Image from "next/image";
import { Header } from "../components/header/header";
import Footer from "../components/footer/footer";
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin } from "react-bootstrap-icons";

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-screen">
      <Header />
      <div className="bg-about w-full bg-cover bg-center flex justify-center items-center bg-blend-darken">
        <div className="h-full w-full flex flex-col justify-start items-start gap-10 p-5 pl-24 md:pl-12 pt-20 pb-[100px] backdrop-blur-sm backdrop-brightness-50">
          <p className="w-full text-white md:text-base text-xl">About Us</p>
          <p className="w-full text-white md:text-xl font-semibold text-4xl">
            About Us - Who Are We?
          </p>
        </div>
      </div>
      <div className="w-full h-max flex flex-row justify-center items-start sm:flex-col p-10 gap-5">
        <div className="w-full h-full py-16">
          <h1 className="text-3xl text-left font-semibold pt-[5px] pb-[20px]">
            Our Story
          </h1>
          <p className="text-lg">
            Virtual Bills LLC is led by a capable and experienced management
            team, with Mayor Mogbeyiteren serving as the Managing Director. Mr.
            Mogbeyiteren is a distinguished energy and petroleum economist,
            boasting more than 25 years of expertise in the electricity sector.
            His extensive background includes managerial positions at the former
            PHCN, as well as notable roles such as Chairman and Treasurer at the
            Nigerian Institute of Management Chartered. The company is dedicated
            to recruiting highly skilled professionals who collaborate with
            preferred foreign investors to drive technological innovation and
            leverage their substantial experience. This team's primary mission
            is to craft comprehensive plans, set ambitious goals, and establish
            robust processes to ensure the company's strategies remain
            competitive, effective, and focused on long-term success. The
            management team's profound understanding of the business landscape
            allows them to consistently identify scalable opportunities. They
            implement sustainable policies and procedures that enhance quality
            and efficiency, fostering a commitment to utilizing technology for
            the betterment of both individuals and organizations. Virtual Bills
            LLC takes a holistic approach, with a strong focus on serving the
            community and addressing the diverse needs of individuals
            and their families. Virtual Bills LLC offers a comprehensive
            solution for utility management, pioneering automation and
            innovation within the Oil, Gas, and Power sectors. We utilize
            cutting-edge software to seamlessly handle essential operations,
            maintain a comprehensive customer database, and conduct periodic
            billing for utility companies in Nigeria. In collaboration with our
            esteemed foreign technical partner, Virtual Bills LLC delivers
            advanced management suites designed to automate and optimize all
            aspects of the billing process. This empowers utility companies to
            offer real-time service delivery, collection, and payment processing
            in their own branded names, thereby providing customers with
            state-of-the-art billing experiences. From kiosk to mobile wallet
            billing and payments, our solutions enhance revenue collection while
            concurrently reducing operational costs.
          </p>
          <div className="w-full h-max pt-10"></div>
        </div>
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0 },
            visible: { opacity: 1, scale: 1.0 },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1.0 }}
          className="min-w-[300px] min-h-[400px] flex flex-col justify-center items-center shadow-md rounded-lg bg-[##fffdfe] hover:shadow-lg"
        >
          <Image
            width={150}
            height={150}
            src="/md.jpg"
            className="rounded-full "
          />
          <span className="font-light text-xl text-center text-[#590D22]">
            Mayor Mogbeyiteren, MD
          </span>
          <div className="w-full flex justify-center items-center gap-2 text-[#590D22] pt-2 ">
            <a
              href="https://www.linkedin.com/in/mayor-mogbeyiteren-45898416a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className=" bg-white hover:text-[#A4133C] hover:cursor-pointer rounded-full w-[30px] h-[30px] flex justify-center items-center text-xl"
            >
              <Linkedin />
            </a>

            <a
              href="http://wa.me/+2349076313777"
              className=" bg-white hover:text-[#A4133C] hover:cursor-pointer rounded-full w-[30px] h-[30px] flex justify-center items-center text-xl"
            >
              <Linkedin />
            </a>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
