import { IoIosTimer } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { MdDeliveryDining } from "react-icons/md";
import { Carousel } from "react-responsive-carousel";
import ship2 from "../assets/ship2.jpg";
import air from "../assets/air.jpg";
import trucks from "../assets/trucks.jpg";
import WhyChoose from "../sections/WhyChoose";
const About = () => {
  const testimonies = [
    {
      name: "Paul",
      mainImage: ship2,
      title: "CEO",
    },
    {
      name: "Laup",
      mainImage: air,
      title: "CTO",
    },
    {
      name: "Cena",
      mainImage: trucks,
      title: "COO",
    },
  ];
  return (
    <>
      {/* header image */}
      <div className="backgroundImage  -z-10 bg-cover bg-bottom relative bg-blue-600 ">
        <div className="bg-e-global-color-1046ecd transition-all -z-20 duration-300 overlay" />
        <div className="pt-34 lg:pt-52  ">
          <div className=" w-3/4 h-72 mx-auto align-center pt-24 text-center  ">
            <span className="">
              <h1 className=" pb-10 text-white text-4xl lg:text-[2.7rem] font-bold  w-100 h-16   mt-4">
                About Us{" "}
              </h1>
            </span>
            <span>
              <p className=" text-white text-xl lg:text-2xl font-light font-roboto mt-4">
                Connecting Continents, Fast-tracking Success
              </p>
            </span>
          </div>
        </div>
      </div>

      {/* header text  */}

      <div className=" w-full pt-[4rem] bg-slate-100 bg-gradient-to-b from-white">
        <div className="md:flex justify-evenly   md:h-[30rem]">
          <div className=" font-roboto md:w-[37rem] pl-6 md:h-[29rem]">
            {/* </div> */}
            <h1 className="mt-[0.5rem] text-[1.8rem] text-sky-900 font-semibold">
              What we are about ?
            </h1>
            <p className="mt-[1.2rem]">
              At Blue Channel Logistics, we are dedicated to transforming the
              logistics industry with innovative, reliable, and efficient
              solutions. Founded in 198, our company has grown into a trusted
              partner for businesses across various industries, delivering
              unparalleled logistics services that drive growth and success.
            </p>
            <p className="mt-[1.2rem]">
              Our team of experienced professionals is the backbone of our
              company. With expertise in logistics, supply chain management, and
              customer service, our team is committed to providing exceptional
              service and support. We invest in continuous training and
              development to ensure our team is equipped with the latest
              industry knowledge and skills.
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

      <div className=" bg-sky-900 font-roboto w-full xl:h-[19rem] justify-evenly  ">
        <div className="md:flex md:justify-evenly px-[2rem]   h-full md:pt-20 md:pb-20 px-0 py-8 container mx-auto">
          <div className=" md:w-[40rem] xl:h-36 flex items-center space-x-6  ">
            <h1 className=" text-4xl font-semibold text-white outline outline-1 p-4 rounded-md">
              M
            </h1>
            <div>
              <p className="pt-7 text-white font-bold text-3xl">Our mission</p>
              <p className="text-white max-w-sm">
                We meet our customers’ demands for a personal & profesional
                service by offering innovative supply chain solutions.
              </p>
            </div>
          </div>

          <div className=" md:w-[40rem] xl:h-36 flex items-center space-x-4   ">
            <h1 className=" text-4xl font-semibold text-white  outline outline-1 px-5 py-4 rounded-md">
              V
            </h1>
            <div>
              <p className="pt-7 text-white text-3xl font-bold">Our vision</p>
              <p className="text-white max-w-sm">
                We proactively and constantly look for new possibilities.
                Therefore, an important part of our vision is to attract &
                retain.{" "}
              </p>
            </div>
          </div>

          <div className=" md:w-[40rem] xl:h-36 flex items-center space-x-4   ">
            <h1 className=" text-4xl font-semibold text-white outline outline-1 py-4 px-5 rounded-md">
              C
            </h1>
            <div>
              <p className="pt-7 text-white text-3xl font-bold">Core values</p>
              <p className="text-white max-w-sm">
                We meet our customers’ demands for a personal & profesional
                service by offering innovative supply chain solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why choose us */}
       <WhyChoose/>

      {/* Team members  */}
      <div className="bg-[#F3F5F5] lg:px-[8rem] px-[1rem] mt-[4rem] pb-[5rem]">
        <h2 className="text-center text-5xl font-semibold py-8 text-[#03396C]">
          Meet the team
        </h2>
        <Carousel
          showArrows={true}
          stopOnHover={true}
          infiniteLoop={true}
          useKeyboardArrows={true}
          interval={2000}
          autoPlay={true}
        >
          {testimonies.map((item) => {
            return (
              <div className="flex md:flex-row bg-white flex-col items-center px-[1rem] justify-evenly py-8 ">
                <div className="md:w-1/2 flex flex-col space-y-6">
                  <p className="text-[#3A3A3A] font-roboto text-4xl">{item.name}</p>
                  <p className="font-bold text-5xl font-roboto">{item.title}</p>
                </div>
                <div className="">
                  <img
                    src={item.mainImage}
                    className="lg:h-[40vh] md:h-[30vh] hover:brightness-50 transition-all duration-300 translate-y-[-10]"
                    alt=""
                  />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
};

export default About;
