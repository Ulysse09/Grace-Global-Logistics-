import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import logo from "./assets/tai.png";
import yellow from "./assets/10001.jpeg";
import black from "./assets/10002.jpeg";
import red from "./assets/10004.jpeg";
import truck from "./assets/truck.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import plane from "./assets/plane.jpg";
import ship from "./assets/ship.jpg";
import ship2 from "./assets/ship2.jpg";
import air from "./assets/air.jpg";
import trucks from "./assets/trucks.jpg";
import Nav from "./components/Navbar/Nav";
import customs from "./assets/customs.jpg";
import warehouse from "./assets/warehouse.jpg";
import pack from "./assets/package.jpg";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import { Link } from "react-router-dom";
import { IoIosTimer } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { MdDeliveryDining } from "react-icons/md";

function App() {
  const slide = [
    {
      text: "Welcome to Blue Channel Logistics ",
      pic: air,
    },
    {
      text: "Welcome to Blue Channel Logistics",
      pic: trucks,
    },

    {
      text: "Welcome to Blue Channel Logistics ",
      pic: ship2,
    },
  ];

  return (
    <>
      {/* carousell */}
      <div className="relative slideinRight    ">
        <Carousel
          animationHandler="fade"
          swipeable={false}
          autoPlay={true}
          interval={8000}
          infiniteLoop={true}
          className="   "
        >
          {slide.map((item) => {
            return (
              <>
                <div className="lg:mt-24      ">
                  <img
                    src={item.pic}
                    className="lg:h-[100vh] h-[100vh] brightness-50  -z-40   object-cover object-bottom    

                      "
                    alt=""
                  />

                  <div className="lg:w-1/2 absolute top-[5rem] left-[1.5rem]   lg:top-[15rem] flex flex-col items-center  lg:left-[3rem] space-y-8   ">
                    <h2 className="text-white text-center text-4xl lg:text-5xl   max-w-sm lg:max-w-sm font-bold font-roboto">
                      {item.text}
                    </h2>
                    <div className="font-semibold font-roboto space-y-6 lg:ml-[2rem] text-white  ">
                      <p className="text-normal font-roboto lg:max-w-sm text-sm font-normal  text-center">
                        Connecting Continents, Fast-tracking Success
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Carousel>
        <div className="flex flex-col  lg:flex-row space-y-4 lg:space-y-0   justify-center lg:space-x-4 absolute top-[18rem] lg:top-[30rem] left-[8.5rem] lg:left-[16rem]  z-50">
          <Link
            to="about"
            className="focus:bg-blue-400 py-2 px-8 font-roboto text-white border-white border hover:bg-blue-300 transition-colors rounded-sm   "
          >
            About us
          </Link>
          <Link
            to="contact"
            className="py-2 px-8   font-roboto text-white border-white border hover:bg-blue-300 transition-colors duration-300 rounded-sm"
          >
            Contact us
          </Link>
        </div>
      </div>

      {/* About us */}

      <div className="  flex justify-center items-center flex-col  bg-[#F3F5F5]  lg:space-y-0 mt-[-2.5rem] space-y-[3rem] ">
        <h2 className="text-center fadeInDown text-[#3A3A3A] flex justify-center max-w-xl lg:max-w-xl  text-3xl font-bold mb-10 mt-12 ">
          Blue Channel logistics efficiently connecting businesses worldwide
        </h2>
        <div className="flex lg:flex-row flex-col space-y-20 lg:items-center px-[2rem]  lg:space-x-[5rem] lg:container lg:mx-auto">
          <div className="lg:w-[50vw] md:w-[80vw]  lg:p-[5rem]   lg:space-y-4  ">
            <img src={truck} className="rounded-lg" alt="" />
            <p className="font-semibold text-[#3A3A3A]  lg:text-left md:text-right text-center py-4 lg:py-0">
              Rwanda's trusted logistic partner{" "}
            </p>
          </div>
          <div className="space-y-3 flex-col flex lg:items-start items-center   ">
            {/* <h3 className="text-[#3A3A3A] font-bold mt-[5rem] bg-red-400 ">
              MAKE ALMOST ANYTHING
            </h3> */}
            <div className="flex flex-col mb-14 lg:items-start items-center space-y-8">
              <h2 className="text-3xl text-[#03396C] lg:text-left text-center font-semibold font-roboto ">
                Who Are We?
              </h2>
              <p className=" lg:max-w-md max-w-xl text-center md:text-left font-roboto  ">
                <span className="text-sky-900 font-bold">Blue Channel Logistics</span> is your trusted partner for
                efficient and reliable cargo transportation solutions across
                Rwanda and beyond. Based in Kigali, we offer a comprehensive
                range of logistics services to empower businesses of all sizes
                to achieve their goals.
              </p>
            </div>
            <div className="lg:pb-10 flex justify-center  md:pb-20 pb-6">
              <Link
                to={"about"}
                className=" px-10 py-3 md border-2 border-[#03396C]  hover:text-white transition text-[#03396C] hover:bg-[#03396C]  rounded-full "
              >
                Know more
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*freight forwarding   */}
      <h1 className="font-roboto text-center text-4xl text-blue-900  font-bold my-[1rem] p-8">
        Our services
      </h1>
      <div className="bg-white p-2 lg:space-x-4 flex lg:flex-row flex-col items-center  lg:justify-between  lg:px-24 font-roboto">
        <div className="lg:w-1/3 p-8 text-center space-y-4 flex flex-col items-center">
          <img src={truck} className="bg-cover brightness-75" alt="" />
          <h2 className="font-bold text-lg">Road freight forwarding</h2>
          <p className="max-w-xs">
            Cargo are transported at some stage of their journey along the
            world’s roads where we give you a presence.
          </p>
        </div>
        <div className="lg:w-1/3 p-8 text-center flex flex-col items-center space-y-4">
          <img src={ship} className="bg-cover brightness-75" alt="" />
          <h2 className="font-semibold text-lg">Ocean freight forwarding</h2>
          <p className="max-w-xs ">
            Cargo are transported at some stage of their journey along the
            world’s roads where we give you a presence.
          </p>
        </div>
        <div className="lg:w-1/3 p-8 text-center flex flex-col items-center space-y-4">
          <img src={plane} className="bg-cover brightness-75 " alt="" />
          <h2 className="font-semibold text-lg">Air Freight forwarding</h2>
          <p className="max-w-xs">
            Cargo are transported at some stage of their journey along the
            world’s roads where we give you a presence.
          </p>
        </div>
      </div>

      <div className="bg-white p-2 lg:space-x-4 flex lg:flex-row flex-col items-center  lg:justify-between font-roboto mb-[5rem] mt-[2rem]  lg:px-24">
        <div className="lg:w-1/3 p-8 text-center space-y-4 flex flex-col items-center">
          <img src={customs} className="bg-cover brightness-75" alt="" />
          <h2 className="font-bold text-lg">Customs clearance</h2>
          <p className="max-w-xs">
            Cargo are transported at some stage of their journey along the
            world’s roads where we give you a presence.
          </p>
        </div>
        <div className="lg:w-1/3 p-8 text-center flex flex-col items-center space-y-4">
          <img src={warehouse} className="bg-cover brightness-75" alt="" />
          <h2 className="font-semibold text-lg">Warehousing</h2>
          <p className="max-w-xs ">
            Cargo are transported at some stage of their journey along the
            world’s roads where we give you a presence.
          </p>
        </div>
        <div className="lg:w-1/3 p-8 text-center flex flex-col items-center space-y-4">
          <img src={pack} className="bg-cover brightness-75 " alt="" />
          <h2 className="text-lg font-semibold">Product packaging</h2>
          <p className="max-w-xs">
            Cargo are transported at some stage of their journey along the
            world’s roads where we give you a presence.
          </p>
        </div>
      </div>

      {/* Why choose us */}
      <h1 className="font-roboto text-center text-4xl text-blue-900  font-bold my-[5rem]">
        Why choose us
      </h1>
      <div className="md:flex font-roboto xl:justify-evenly h-full w-full gap-2 p-5 xl:pr- xl:pl-20 transition duration-500">
        <div className="group p-5 md:w-[70rem] border-2 border-gray-400 rounded-lg  hover:border-2 hover:border-blue-900 hover:rounded-lg mt-3 transition-colors duration-500 delay-200">
          <div className="bg-blue-900 group-hover:bg-white group-hover:border-4 group-hover:border-blue-900  w-24 h-24 rounded-full flex items-center justify-center mt-6  ml-auto mr-auto ">
            <IoIosTimer className="text-white text-5xl group-hover:text-blue-900  transition-colors duration-500 delay-150 " />
          </div>
          <h2 className="-200 mt-5 flex justify-center font-semibold text-xl">
            24 Hour Support
          </h2>
          <p className=" mt-14 ml-2">
            {" "}
            FabLab Rwanda Ltd mission is to provide knowledge and skills, access
            to the tools, innovate and invent using technology and digital
            fabrication to allow anyone to make (almost anything).We will
            accomplish this while providing quality of training, access to high
            standard digital facilities and excellent quality services to our
            primary beneficiaries who are engineering graduates, educational
            institutions, non-profit and community organizations and creating an
            enjoyable working environment for our employees.
          </p>
        </div>
        <div className=" group p-5 md:w-[70rem]  border-2 border-gray-400 rounded-lg  hover:border-2 hover:border-blue-900 hover:rounded-lg mt-3 transition-colors duration-500 delay-200">
          <div className="bg-blue-900 group-hover:bg-white group-hover:border-4 group-hover:border-blue-900 w-24 h-24 rounded-full flex items-center justify-center ml-auto mr-auto mt-6">
            <RiGlobalLine className="text-white text-5xl group-hover:text-blue-900 transition-colors duration-500 delay-200" />
          </div>
          <h2 className=" mt-5 flex justify-center font-semibold text-xl">
            Global supply chain
          </h2>
          <p className=" mt-14 ml-2">
            To be a well-established digital fabrication company in Rwanda that
            is able to meet customers needs and deliver on time.
          </p>
        </div>
        <div className="group p-5 md:w-[70rem] border-2 border-gray-400 rounded-lg  hover:border-2 hover:border-blue-900 hover:rounded-lg mt-3 transition-colors duration-500 delay-200">
          <div className="bg-blue-900 group-hover:bg-white group-hover:border-4 group-hover:border-blue-900  flex items-center justify-center w-24 h-24 rounded-full ml-auto mr-auto mt-6">
            <MdDeliveryDining className="text-white text-5xl group-hover:text-blue-900 transition-colors duration-500 delay-200" />
          </div>
          <h2 className=" mt-5 flex justify-center font-semibold text-xl">
            Time on Delivery
          </h2>
          <p className=" mt-14 ml-2">
            To Provide shared workspace and tools for schools, TVETs &
            individuals to work and develop ideas into products in a wide range
            of domains. To develop Skills in technology education through events
            & workshops To facilitate translation of innovative concepts into
            marketable products To enhance the number of professional design
            experts in Rwanda with word class hands on experience and access to
            tools. To increase research and improve designs of African centric
            hardware tools
          </p>
        </div>
      </div>

      {/* contact form  */}
      <Form />
    </>
  );
}

export default App;
