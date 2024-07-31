import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import ship2 from "../../assets/ship2.jpg";
import air from "../../assets/air.jpg";
import trucks from "../../assets/trucks.jpg";
import pic from '../../assets/10001.jpg'
import pic2 from "../../assets/10002.jpg";
import pic3 from "../../assets/10003.jpg";
import pic4 from "../../assets/10004.jpg";
import pic5 from "../../assets/10005.jpg";
import pic6 from '../../assets/pearLogo.jpg'
import pic7 from '../../assets/congoCables.png'

const OurPartners = () => {
    const testimonies = [
      {
        name: pic,
        mainImage: pic2,
        title: pic3,
      },
      {
        name: pic4,
        mainImage:pic5,
        title: pic6,
      },
      {
         
        mainImage: pic7,
        name:pic,
        title:pic2
         
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
          interval={4000}
          autoPlay={true}

        >
          {testimonies.map((item) => {
            return (
              <div className="flex md:flex-row  md:space-x-4 space-y-4 md:space-y-0  flex-col items-center px-[2rem] justify-evenly py-8 ">
                <div className=" md:w-1/3">
                  <img
                    src={item.mainImage}
                    className="lg:h-[40vh] h-[30vh] md:h-[30vh] object-fill hover:brightness-50 transition-all duration-300 translate-y-[-10]"
                    alt=""
                  />
                </div>
                <div className=" md:w-1/3">
                  <img
                    src={item.name}
                    className="lg:h-[40vh] h-[30vh] md:h-[30vh] object-fill hover:brightness-50 transition-all duration-300 translate-y-[-10]"
                    alt=""
                  />
                </div>
                <div className=" md:w-1/3">
                  <img
                    src={item.title}
                    className="lg:h-[40vh] h-[30vh] md:h-[30vh] object-fill hover:brightness-50 transition-all duration-300 translate-y-[-10]"
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