"use client";
import React from "react";
import { Header } from "../header/header";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {
  return (
    <div className="background w-full bg-cover bg-center flex flex-col justify-start items-start shadow-md">
      <Header />
      <div className="flex-1 w-full flex flex-col justify-start items-start gap-10 p-5 pl-24 md:pl-12 pt-20 pb-[100px] backdrop-blur-sm backdrop-brightness-50">
        <TypeAnimation
          sequence={[
            "DIGITAL DEBT COLLECTION SCHEME FOR UTILITY COMPANIES",
            1000,
            "DIGITAL DEBT COLLECTION SCHEME FOR RESOURCE PROVIDERS",
            1000,
            "DIGITAL DEBT COLLECTION SCHEME FOR PUBLIC SERVICE PROVIDERS",
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="text-4xl text-white pb-3 max-w-2xl"
          repeat={Infinity}
        />

        <span className="text-white text-lg font-semibold max-w-2xl pb-6">
          Virtual Bills LLC, in partnership with a financial technology company,
          is dedicated to automating key operational aspects within the utility
          sector. Our solution encompasses the management of sales personnel,
          field technicians, and the entire billing process. This comprehensive
          suite empowers utility companies to efficiently deliver, collect, and
          process payments for their services, while also facilitating the
          logistics management for companies associated with the utility
          industry. Our platform serves as a comprehensive, one-stop solution
          for utility companies, enabling them to provide customers with
          cutting-edge billing experiences, ranging from kiosk-based to mobile
          wallet billing and payment options. These enhancements significantly
          improve revenue collection while simultaneously reducing
          operational costs." The Oil, Gas, and Power sector confronts a
          multitude of challenges. These include issues such as revenue erosion
          due to oil theft, the vandalism of pipelines and power lines, systemic
          corruption, and difficulties in meeting credit institution payment
          requirements. In response to these challenges, we have undertaken a
          proactive initiative to address them. Our approach involves the
          implementation of a cutting-edge technological solution to automate
          the billing processes for delivery, collection, and payments.
          Leveraging the substantial technical expertise and extensive
          experience within our financial technology company, we aim to enhance
          utility services through this automation.
        </span>
        <button className="text-lg text-white text-center w-[300px] h-[60px] bg-[#800F2F] md:text-sm md:w-[220px] md:h-[50px] border-black border hover:text-[#800F2F] hover:shadow-[inset_20rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow]">
          REQUEST A CONSULTATION
        </button>
      </div>
    </div>
  );
};

export default Banner;
