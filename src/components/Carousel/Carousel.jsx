import React from 'react'
import { Carousel } from "react-responsive-carousel";
import ship2 from "../../assets/ship2.jpg";
import air from "../../assets/air.jpg";
import trucks from "../../assets/trucks.jpg";


const CarouselComp = () => {

    const slide = [
      {
        text: "Bienvenue chez Grace Global Logistics ",
        pic: air,
      },
      {
        text: "Bienvenue chez Grace Global Logistics",
        pic: trucks,
      },

      {
        text: "Bienvenue chez Grace Global Logistics ",
        pic: ship2,
      },
    ];
  return (
    <div className="relative " >
        <Carousel
          animationHandler="fade"
          swipeable={false}
          autoPlay={true}
          interval={8000}
          infiniteLoop={true}
          className=" h-[60vh] lg:h-full  "
        >
          {slide.map((item) => {
            return (
              <>
                <div className="lg:mt-24      ">
                  <img
                    src={item.pic}
                    className="lg:h-[100vh] h-[90vh] brightness-50  -z-40   object-cover object-bottom    

                      "
                    alt=""
                  />

                  <div className="lg:w-1/2 absolute top-[5rem] left-[1.5rem] fadeInDown    lg:top-[15rem] flex flex-col items-center  lg:left-[3rem] space-y-8    ">
                    <h2 className="text-white text-center text-4xl lg:text-6xl     max-w-sm lg:max-w-screen-sm font-bold font-roboto">
                      {item.text}
                    </h2>
                    <div className="font-semibold font-roboto space-y-6 lg:ml-[2rem] text-white  ">
                      <p className="lg:text-xl font-roboto lg:max-w-lg text-md font-semibold  text-center">
                        Votre partenaire logistique de confiance{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </Carousel>
    </div>
  )
}



export default CarouselComp