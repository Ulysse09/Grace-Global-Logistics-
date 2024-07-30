import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import ship2 from "../../assets/ship2.jpg";
import air from "../../assets/air.jpg";
import trucks from "../../assets/trucks.jpg";

const OurPartners = () => {
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
    <div>
      <div className="bg-[#F3F5F5] lg:px-[8rem] px-[1rem] mt-[4rem] pb-[5rem]">
        <h2 className="text-center text-5xl font-semibold py-8 text-[#03396C] font-roboto">
          Nos Partenaires
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
                  <p className="text-[#3A3A3A] font-roboto text-4xl">
                    {item.name}
                  </p>
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
    </div>
  );
}

export default OurPartners