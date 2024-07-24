import React from 'react'

import { IoIosTimer } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { MdDeliveryDining } from "react-icons/md";

const WhyChoose = () => {
  return (
    <div>
      <div className="from-gray-200 bg-gradient-to-b to-white">
        <h1 className="font-roboto text-center text-5xl text-blue-900 pt-24  font-bold my-[5rem]">
          Why choose us
        </h1>
        <div className="md:flex font-roboto xl:justify-evenly  w-full gap-2 pb-5 mb-24  xl:pl-20 transition duration-500">
          <div className="group p-5 h-[65vh]     rounded-lg    hover:rounded-lg mt-3 transition-colors duration-500 delay-200">
            <div className="bg-blue-900 group-hover:bg-white group-hover:border-4 group-hover:border-blue-900  w-24 h-24 rounded-full flex items-center justify-center mt-6  ml-auto mr-auto ">
              <IoIosTimer className="text-white text-5xl group-hover:text-blue-900  transition-colors duration-500 delay-150 " />
            </div>
            <h2 className="-200 mt-5 flex justify-center font-semibold text-xl">
              24 Hour Support
            </h2>
            <p className=" mt-14 ml-2">
              {" "}
              At Blue Channel Logistics, we are committed to providing
              exceptional support to ensure your logistics operations run
              smoothly. Our 24-hour support means:
            </p>
          </div>
          <div className=" group p-5 md:w-[70rem] h-[65vh]  rounded-lg      hover:rounded-lg mt-3 transition-colors duration-500 delay-200">
            <div className="bg-blue-900 group-hover:bg-white group-hover:border-4   group-hover:border-blue-900 w-24 h-24 rounded-full flex items-center justify-center ml-auto mr-auto mt-6">
              <RiGlobalLine className="text-white text-5xl group-hover:text-blue-900  transition-colors duration-500 delay-200" />
            </div>
            <h2 className=" mt-5 flex justify-center font-semibold text-xl">
              Global supply chain
            </h2>
            <p className=" mt-14 ml-2">
              We have a robust network of partners and resources across the
              globe, ensuring your goods are transported efficiently and
              reliably, no matter where they need to go.
            </p>
          </div>
          <div className="group p-5 md:w-[70rem] h-[65vh]   rounded-lg     hover:rounded-lg mt-3 transition-colors duration-500 delay-200">
            <div className="bg-blue-900 group-hover:bg-white group-hover:border-4 group-hover:border-blue-900     flex items-center justify-center w-24 h-24 rounded-full ml-auto mr-auto mt-6">
              <MdDeliveryDining className="text-white text-5xl group-hover:text-blue-900 transition-colors duration-500 delay-200" />
            </div>
            <h2 className=" mt-5 flex justify-center font-semibold text-xl">
              Time on Delivery
            </h2>
            <p className=" mt-14 ml-2">
              Our unwavering commitment to on-time delivery ensures that your
              shipments reach their destinations as scheduled, helping you meet
              your business goals and exceed customer expectations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChoose