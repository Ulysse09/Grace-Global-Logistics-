 
import "./App.css"; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
 
import Form from "./components/Form/Form";
import { Link } from "react-router-dom";
 

import atruck from "./assets/Atruck.jpeg";
 
import WhyChoose from "./sections/WhyChoose";
import { useEffect, useRef } from "react";
import CarouselComp from "./components/Carousel/Carousel";
import OurServices from "./sections/OurServices";

function App() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.classList.add("fadeInDown");
    }
  });

  return (
    <>
      <CarouselComp />

      {/* Do not mess with the component below  */}
      <div className="flex flex-col  lg:flex-row space-y-4 lg:space-y-0   justify-center lg:space-x-4 absolute top-[20rem] lg:top-[28rem] left-[7.5rem] lg:left-[15rem] xl:left-[14rem]   z-50">
        <Link
          to="about"
          className="focus:bg-blue-400 py-2 px-8 text-center  font-roboto text-white border-white border hover:bg-blue-300 transition-colors rounded-sm   "
        >
          À propos
        </Link>
        <Link
          to="contact"
          className="py-2 px-8   font-roboto text-white border-white border hover:bg-blue-300 transition-colors duration-300 rounded-sm"
        >
          Contactez-nous
        </Link>
      </div>

      {/* À propos */}

      <div className="  flex justify-center items-center flex-col  bg-[#F3F5F5]  lg:space-y-0 mt-[-2.5rem] space-y-[3rem] ">
        <h2 className="text-center fadeInDown text-[#3A3A3A] flex justify-center max-w-xl lg:max-w-4xl  lg:text-4xl text-2xl  font-bold mb-10 mt-12 ">
          Grace Global Logistics connecte efficacement les entreprises à travers
          le monde
        </h2>
        <div className="flex lg:flex-row flex-col space-y-20 lg:items-center px-[2rem]  lg:space-x-[5rem] lg:container lg:mx-auto">
          <div className="lg:w-[50vw] md:w-[80vw] bg-overlay  lg:p-[5rem]   lg:space-y-4  ">
            <img
              src={atruck}
              className="rounded-lg brightness-negative "
              alt=""
            />

            <p className="font-semibold text-[#3A3A3A]  lg:text-left md:text-right text-center py-4 lg:py-0">
              Partenaire logistique de confiance du RDCongo{" "}
            </p>
          </div>
          <div className="lg:space-y-3  space-y-[-1rem] flex-col flex lg:items-start items-center   ">
            <div className="flex flex-col mb-14 lg:items-start items-center lg:space-y-8 space-y-6">
              <h2 className="lg:text-5xl text-4xl text-[#03396C] lg:text-left text-center font-semibold font-roboto ">
                Qui sommes-nous ?
              </h2>
              <p className=" lg:max-w-md max-w-xl text-center md:text-left font-roboto  ">
                <span className="text-sky-900 font-bold">
                  Grace Global Logistics
                </span>{" "}
                est une entreprise de droit Congolais basée à Goma en RDC,
                operant sur toute l’etendu du pays et de la region avec des ag-
                ents de liaison au port de Mombasa-Kenyaet de Dar es
                Salaam-Tanzanie ainsi que à Kampala-Uganda et en Zambie pour
                toutes vos opérations d'importations et expor tations.
              </p>
            </div>
            <div className="lg:pb-10 flex justify-center  md:pb-20 pb-14">
              <Link
                to={"about"}
                className=" px-10 py-3 md border-2 border-[#03396C]  hover:text-white transition text-[#03396C] hover:bg-[#03396C] font-roboto  font-semibold  rounded-full "
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*Our services  */}
      <OurServices />

      {/* Why choose us */}
      <WhyChoose />

      {/* contact form  */}
      <Form />
    </>
  );
}

export default App;
