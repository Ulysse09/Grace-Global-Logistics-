import truck from "../assets/truck.jpg";
import ship from "../assets/ship.jpg";
import plane from "../assets/plane.jpg";
import { IoIosTimer } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { MdDeliveryDining } from "react-icons/md";
import customs from "../assets/customs.jpg";
import warehouse from "../assets/warehouse.jpg";
import pack from "../assets/package.jpg";
import { IoCheckbox } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import { FaHandHolding } from "react-icons/fa";




const Services = () => {
  return (
    <>
      <div className="backgroundImage -z-10 bg-cover bg-center relative bg-blue-600 ">
        <div className="bg-e-global-color-1046ecd transition-all -z-20 duration-300 overlay" />
        <div className="pt-52  ">
          <div className=" w-3/4 h-72 mx-auto align-center pt-24 text-center  ">
            <span className="">
              <h1 className=" pb-10 text-white text-[2.7rem] font-bold  w-100 h-16 text-6xl mt-4">
                Our services
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

      <div className=" w-full pt-[4rem]  ">
        <div className="md:flex font-roboto px-[5rem]  mb-[7rem] justify-between items-center    ">
          <div className=" lg:w-1/2   ">
            <p className="font-semibold border-l-4 border-l-blue-800 pl-2 text-4xl tracking-wide">
              UNBEATABLE TRUCKING AND TRANSPORT SERVICES
            </p>

            <p className="mt-[1.2rem] max-w-lg">
              Blue Channel Logistics is Rwanda's world leading logistic service
              company and transporting Solution.
            </p>
          </div>
          <div className="w-1/2    ">
            <p>
              Cargo Hub is the world’ s leading logistic service company, We
              have a wide experience in overland industry specific logistic
              solutions like pharmaceutical logistics, retail and automotive
              logistics by train or road. We bring your goods safely to
              worldwide destinations with our great sea fright services.We offer
              LLC and FLC shipments that are fast and effective with no delays.
            </p>
          </div>
        </div>
      </div>

      {/* Services */}

      {/*freight forwarding   */}
      <h1 className="font-roboto text-center text-4xl text-blue-700  font-bold my-[5rem]">
        Our services
      </h1>
      <div className="bg-white p-2 lg:space-x-4 flex lg:flex-row flex-col items-center  lg:justify-between  lg:px-24 font-roboto">
        <div className="lg:w-1/3 text-center space-y-4 flex flex-col items-center">
          <img src={truck} className="bg-cover brightness-75" alt="" />
          <h2 className="font-bold text-lg">Road freight forwarding</h2>
          <p className="max-w-xs">
            Cargo are transported at some stage of their journey along the
            world’s roads where we give you a presence.
          </p>
        </div>
        <div className="lg:w-1/3 text-center flex flex-col items-center space-y-4">
          <img src={ship} className="bg-cover brightness-75" alt="" />
          <h2 className="font-semibold text-lg">Ocean freight forwarding</h2>
          <p className="max-w-xs ">
            Cargo are transported at some stage of their journey along the
            world’s roads where we give you a presence.
          </p>
        </div>
        <div className="lg:w-1/3 text-center flex flex-col items-center space-y-4">
          <img src={plane} className="bg-cover brightness-75 " alt="" />
          <h2 className="font-semibold text-lg">Air Freight forwarding</h2>
          <p className="max-w-xs">
            Cargo are transported at some stage of their journey along the
            world’s roads where we give you a presence.
          </p>
        </div>
      </div>

      <div className="bg-white p-2 lg:space-x-4 flex lg:flex-row flex-col items-center  lg:justify-between font-roboto mb-[10rem] mt-[2rem]  lg:px-24">
        <div className="lg:w-1/3 text-center space-y-4 flex flex-col items-center">
          <img src={customs} className="bg-cover brightness-75" alt="" />
          <h2 className="font-bold text-lg">Customs clearance</h2>
          <p className="max-w-xs">
            Cargo are transported at some stage of their journey along the
            world’s roads where we give you a presence.
          </p>
        </div>
        <div className="lg:w-1/3 text-center flex flex-col items-center space-y-4">
          <img src={warehouse} className="bg-cover brightness-75" alt="" />
          <h2 className="font-semibold text-lg">Warehousing</h2>
          <p className="max-w-xs ">
            Cargo are transported at some stage of their journey along the
            world’s roads where we give you a presence.
          </p>
        </div>
        <div className="lg:w-1/3 text-center flex flex-col items-center space-y-4">
          <img src={pack} className="bg-cover brightness-75 " alt="" />
          <h2 className="text-lg font-semibold">Product packaging</h2>
          <p className="max-w-xs">
            Cargo are transported at some stage of their journey along the
            world’s roads where we give you a presence.
          </p>
        </div>
      </div>

      <div className=" bg-sky-900 w-full font-roboto   ">
        <h1 className="font-roboto text-center text-4xl text-white  font-bold pt-[2.5rem]">
          How does Blue Channel Logistics work
        </h1>
        <div className="md:flex md:justify-evenly   h-full md:pt-20 md:pb-20 px-0 py-8 container mx-auto">
          <div className=" md:w-[40rem]  flex flex-col items-center space-x-6  ">
            <h1 className=" text-4xl font-semibold text-white outline outline-1 p-4 rounded-md">
              <IoCheckbox />
            </h1>
            <div>
              <p className="pt-5 text-white text-center font-bold text-lg">
                Receive order
              </p>
              <p className="text-white max-w-xs text-center">
                We meet our customers’ demands for a personal & profesional
                service by offering innovative supply chain solutions.
              </p>
            </div>
          </div>

          <div className=" md:w-[40rem] xl:h-36 flex flex-col items-center space-x-4   ">
            <h1 className=" text-4xl font-semibold text-white outline outline-1 px-5 py-4 rounded-md">
              <FaTruck />
            </h1>
            <div>
              <p className="pt-5 text-white text-center font-bold text-lg">
                Transport shipment{" "}
              </p>
              <p className="text-white max-w-xs text-center">
                We meet our customers’ demands for a personal & profesional
                service by offering innovative supply chain solutions.
              </p>
            </div>
          </div>

          <div className=" md:w-[40rem] xl:h-36 flex flex-col items-center space-x-4   ">
            <h1 className=" text-4xl font-semibold text-white outline outline-1 py-4 px-5 rounded-md">
              <FaHandHolding />
            </h1>
            <div>
              <p className="pt-5 text-white text-center font-bold text-lg">
                Deliver shipment{" "}
              </p>
              <p className="text-white max-w-xs text-center">
                We meet our customers’ demands for a personal & profesional
                service by offering innovative supply chain solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full pt-[4rem] bg-slate-100 bg-gradient-to-b from-white">
        <div className="md:flex justify-evenly   md:h-[30rem]">
          <div className=" md:w-[37rem] pl-6 md:h-[29rem]">
            {/* <div className="flex flex-start gap-3 "> */}
            {/* <div className="h-[0.1rem] w-14 bg-blue-800 mt-3"></div> */}
            <p className="font-normal text-md tracking-wide">
              ABOUT FABLAB RWANDA
            </p>
            {/* </div> */}
            <h1 className="mt-[0.5rem] text-[1.8rem] font-semibold">
              Who we are
            </h1>
            <p className="mt-[1.2rem]">
              FabLab Rwanda is a space for members to turn innovative ideas into
              products specifically in the hardware and electronics domain. The
              space provides a platform for capacity building and integration of
              hardware skills with software knowledge and quickly bringing
              Rwandan innovators closer to the Internet of Things era. The space
              provides collaborative community, Knowledge base and innovation
              business model Guidance with a core focus to increase Rwandas
              competitiveness in the fields of Design, Engineering, Electronics,
              Fabrication and High-Tech innovative business.
            </p>
            <p className="mt-[1.2rem]">
              FABLAB Rwanda also serves as a model for the nations leaders in
              policy, government, and industry, to experience, first hand, Fab
              Labs grass roots approach in developing technical education and
              literacy, promoting innovation and launching inventions
              <br /> while transforming traditional industries into digital
              fabrication agents.
            </p>
          </div>
          <div className=" md:h-[23rem] xl:w-[32rem] md:w-[30rem] sm:w-[10rem] sm:h-[40rem] block justify-end px-4 py-2 ">
            <span className="flex justify-end ">
              <img
                src="https://i.ibb.co/ggfVWRm/10001.jpg"
                alt=""
                className=" mt-2 md:w-[29rem] rounded-md"
              />
            </span>

            <span className=" flex justify-end ">
              <p className="mt-3 font-semibold text-slate-500">
                Innovation Lab
              </p>
            </span>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="md:flex xl:justify-evenly h-full w-full gap-2 p-5 xl:pr- xl:pl-20 transition duration-500">
        <div className="group p-5 md:w-[70rem] border-2 border-gray-100  rounded-lg  hover:border-2 hover:border-blue-900 hover:rounded-lg mt-3 transition-colors duration-500 delay-200">
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
        <div className=" group p-5 md:w-[70rem]  border-2 border-gray-100 rounded-lg  hover:border-2 hover:border-blue-900 hover:rounded-lg mt-3 transition-colors duration-500 delay-200">
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
        <div className="group p-5 md:w-[70rem] border-2 border-gray-100 rounded-lg  hover:border-2 hover:border-blue-900 hover:rounded-lg mt-3 transition-colors duration-500 delay-200">
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
    </>
  );
};

export default Services;
