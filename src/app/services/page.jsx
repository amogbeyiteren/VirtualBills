import React from "react";
import Image from "next/image";
import { Header } from "../components/header/header";
import Footer from "../components/footer/footer";

const page = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-12 pl-12 pr-10 py-16">
        <div className="flex flex-col border-l-4 border-[#590D22] pl-2 bg-[#FFF0F3]">
          <span className="text-3xl font-semibold text-[#590D22] pb-3">
            How We Work
          </span>
          <span>
            Virtual Bills LLC in association with its foreign technical partner
            provides the management suites that automates and optimizes all the
            billing processes, that enables Utility companies deliver, collect
            and receive Payments for services rendered to their customers
            real-time in their own branded names. Connect with us and give your
            customers the state state -of- the -art billing experiences, from
            kiosk to mobile wallet billing and payments that impacts positively
            on revenue collection , while at the same time lowering costs.
          </span>
        </div>
        <div className="flex flex-col border-l-4 border-[#590D22] pl-2 bg-[#FFF0F3]">
          <span className="text-3xl font-semibold text-[#590D22] pb-3">
            Why And Where
          </span>
          <span>
            The Oil, Gas, and Power sector confronts a multitude of challenges.
            These include issues such as revenue erosion due to oil theft, the
            vandalism of pipelines and power lines, systemic corruption, and
            difficulties in meeting credit institution payment requirements. In
            response to these challenges, we have undertaken a proactive
            initiative to address them. Our approach involves the implementation
            of a cutting-edge technological solution to automate the billing
            processes for delivery, collection, and payments. Leveraging the
            substantial technical expertise and extensive experience within our
            financial technology company, we aim to enhance utility services
            through this automation.
          </span>
        </div>
        <div className="flex flex-col border-l-4 border-[#590D22] pl-2 bg-[#FFF0F3]">
          <span className="text-3xl font-semibold text-[#590D22] pb-3">
            Our Mission
          </span>
          <span>
            Our mission is to help institutions realize thier full potential
            while we gain financial independence that will enable us to pursue
            social justice and support for the weak.
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
