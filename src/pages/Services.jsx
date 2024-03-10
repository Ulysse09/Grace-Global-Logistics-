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
      <div className="backgroundImage1 -z-10 bg-cover bg-center relative bg-blue-600 ">
        <div className="bg-e-global-color-1046ecd transition-all -z-20 duration-300 overlay" />
        <div className="lg:pt-52 pt-34  ">
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
        <div className="md:flex font-roboto px-[5rem] space-y-10 lg:space-y-0  mb-[7rem] justify-between items-center    ">
          <div className=" lg:w-1/2 space-y-[2rem] lg:space-y-[0rem]   ">
            <p className="font-semibold border-l-4 border-l-blue-800 pl-2 lg:text-4xl text-2xl tracking-wide">
              UNBEATABLE TRUCKING AND TRANSPORT SERVICES
            </p>

            <p className="mt-[1.2rem] lg:max-w-lg">
              Blue Channel Logistics is Rwanda's world leading logistic service
              company and transporting Solution.
            </p>
          </div>
          <div className="lg:w-1/2    ">
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

      <div className="bg-white p-2 lg:space-x-4 flex lg:flex-row flex-col items-center  lg:justify-between font-roboto mb-[10rem] mt-[2rem]  lg:px-24">
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

       {/*  */}

       
    </>
  );
};

export default Services;
