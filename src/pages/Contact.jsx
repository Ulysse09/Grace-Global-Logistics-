import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <>
      {/* header image */}
      <div className="backgroundImage -z-10 bg-cover bg-bottom relative bg-blue-600 ">
        <div className="bg-e-global-color-1046ecd transition-all -z-20 duration-300 overlay" />
        <div className="pt-52  ">
          <div className=" w-3/4 h-72 mx-auto align-center pt-24 text-center  ">
            <span className="">
              <h1 className=" pb-10 text-white text-[2.7rem] font-bold  w-100 h-16 text-6xl mt-4">
                Contact Us{" "}
              </h1>
            </span>
            <span>
              <p className=" text-white text-[1.5rem] font-semibold mt-4">
                We make almost anything
              </p>
            </span>
          </div>
        </div>
      </div>
      {/* header text  */}
      <div className=" w-full font-roboto pt-[4rem] px-8 bg-slate-100 bg-gradient-to-b from-white">
        <div className="md:flex justify-evenly   ">
          <div className="  lg:w-1/2 p-6   ">
            <h1 className="uppercase text-4xl font-semibold">
              Contact details
            </h1>
            <p className="mt-6 max-w-lg ">
              If you have any questions about what we offer for consumers or for
              business, you can always email us or call us via the below
              details. We’ll reply within 24 hours.
            </p>
            <div className="flex flex-col  items-start text-black  container mx-auto">
              <div className=" md:w-[40rem]  xl:h-36 flex items-center space-x-6  ">
                <h1 className=" text-4xl font-semibold  outline outline-1 p-4 rounded-md">
                  <CiLocationOn />
                </h1>
                <div>
                  <p className="pt-7 font-roboto font-bold ">Visit us</p>
                  <p className=" max-w-sm">
                    We meet our customers’ demands for a personal & profesional
                    service by offering innovative supply chain solutions.
                  </p>
                </div>
              </div>

              <div className=" md:w-[40rem] xl:h-36 flex items-center space-x-4   ">
                <h1 className=" text-4xl font-semibold   outline outline-1 px-5 py-4 rounded-md">
                  <FaPhoneAlt />
                </h1>
                <div>
                  <p className="pt-7 font-bold ">Call us on</p>
                  <p className=" max-w-sm">
                    We proactively and constantly look for new possibilities.
                    Therefore, an important part of our vision is to attract &
                    retain.{" "}
                  </p>
                </div>
              </div>

              <div className=" md:w-[40rem] xl:h-36 flex items-center space-x-4   ">
                <h1 className=" text-4xl font-semibold  outline outline-1 py-4 px-5 rounded-md">
                  <CiMail />
                </h1>
                <div>
                  <p className="pt-7 font-bold font-roboto ">Mail us on</p>
                  <p className=" max-w-sm">
                    We meet our customers’ demands for a personal & profesional
                    service by offering innovative supply chain solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* working hours section */}

          <div className="lg:w-1/4 mt-8  ">
            <div className="p-4 border-2">
              <h2 className="uppercase font-semibold text-3xl pt-1">
                Working hours
              </h2>
              <p className="pt-4">These are our office working hours </p>
              <div className="justify-between flex mt-4 border-b-2 p-4">
                <p>Monday</p>
                <p>9:00am-17.00 pm </p>
              </div>
              <div className="justify-between flex mt-4 border-b-2 p-4">
                <p>Tuesday</p>
                <p>9:00am-17.00 pm </p>
              </div>
              <div className="justify-between flex mt-4 border-b-2 p-4">
                <p>Wednesday</p>
                <p>9:00am-17.00 pm </p>
              </div>
              <div className="justify-between flex mt-4 border-b-2 p-4">
                <p>Thursday</p>
                <p>9:00am-17.00 pm </p>
              </div>
              <div className="justify-between flex mt-4 border-b-2 p-4">
                <p>Friday</p>
                <p>9:00am-17.00 pm </p>
              </div>
              <div className="justify-between flex mt-4   p-4">
                <p>Sat & Sunday</p>
                <p className=" text-red-500">Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact form  */}
      <div className="pb-8 relative">
        <div className="bg-image-2 " />
        <div className="bg-white  flex flex-col md:flex-row absolute lg:w-[50%] md:w-[75%] mt-[-38rem] lg:mt-[-52rem]   lg:top-[54rem] md:left-[8rem] md:top-[55rem] py-[2rem] md:pb-[6rem] pb-[5rem] w-full">
          <div className="flex flex-col px-8 py-0 md:w-2/3 space-y-10 ">
            <h2 className="text-[#03396C] text-2xl font-semibold">
              Tell us what you think
            </h2>

            <input
              type="text"
              placeholder="Name"
              name=""
              id=""
              className="border border-gray-400 rounded-sm px-3 py-1"
              required
            />
            <input
              type="text"
              placeholder="Email"
              className="border border-gray-400 rounded-sm px-3 py-1"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-400 rounded-sm px-3 py-1"
              required
            />
            <input
              type="text"
              placeholder="Message"
              className="border border-gray-400 rounded-sm px-3 py-8"
              required
            />
            <div className="">
              <button className="px-4 py-2 bg-[#055589] rounded-md text-white font-semibold">
                Send message
              </button>
            </div>
          </div>
          <div className="md:w-1/3 flex flex-col items-center  space-y-2 pt-[4rem] pb-[4rem]  ">
            <div>
              <h2 className="font-bold text-xl text-[#3A3A3A] text-center">
                Address
              </h2>
              <p className="text-[#3A3A3A]">KG 548 St, Kigali</p>
            </div>

            <div>
              <h2 className="font-bold text-xl text-[#3A3A3A] text-center">
                Email
              </h2>
              <p className="text-[#3A3A3A]">info@fablab.rw</p>
            </div>

            <div>
              <h2 className="font-bold text-xl text-[#3A3A3A] text-center">
                Phone
              </h2>
              <p className="text-[#3A3A3A]">+250 789 276 080</p>
            </div>
          </div>
        </div>
      </div>

      {/* embedded map  */}
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.925743501694!2d30.08214704579601!3d-1.9744905432534954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca7a44033e397%3A0x42655b8713273770!2sMagerwa%20warehouse%20B!5e0!3m2!1sen!2srw!4v1709658041508!5m2!1sen!2srw"
          className="w-full"
          height="450"
         
          
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
