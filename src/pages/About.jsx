 

import WhyChoose from "../sections/WhyChoose";
 import OurPartners from "../components/OurPartners/OurPartners";
 import aboutlog from "../assets/aboutlog.jpeg";


const About = () => {
    return (
      <>
        {/* header image */}
        <div className="backgroundImage  -z-10 bg-cover bg-bottom relative bg-blue-600 ">
          <div className=" -z-20 duration-300 overlay" />
          <div className="pt-34 lg:pt-2  ">
            <div className=" w-3/4 h-72 mx-auto align-center pt-24 text-center  ">
              <span className="">
                <h1 className=" pb-10 text-white text-4xl lg:text-[2.7rem] font-bold  w-100 h-16   mt-4">
                  À propos{" "}
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

        <div className=" w-full py-[4rem] bg-slate-100 bg-gradient-to-b from-white">
          <div className="md:flex justify-around     md:h-[30rem]">
            <div className=" font-roboto  mt-[5rem]   md:w-1/2 md:pl-[5rem] pl-6">
              <h1 className="mt-[0.5rem] text-5xl text-sky-900 font-semibold">
                De quoi s'agit-il ?{" "}
              </h1>
              <p className="mt-[1.2rem]">
                Grace Global Logistics; est une entreprise de droit Congolais
                basée à Goma en RDC, operant sur toute l’etendu du pays et de la
                region avec des ag- ents de liaison au port de Mombasa-Kenyaet
                de Dar es Salaam-Tanzanie ainsi que à Kampala-Uganda et en
                Zambie pour toutes vos opérations d'importations et expor
                tations.
              </p>
              <p className="mt-[1.2rem]">
                Nous offrons depuis 10 ans un service varié dans la logistique
                et chaînes d'approvis- ionnement, principalement le
                dédouanement, l'entreposage, le transport multimoda I ou sous
                toutes ses formes (aérien, terrestre et maritime).
              </p>
            </div>
            <div className="   flex flex-col items-center md:w-1/2 px-4 py-2 ">
              <img
                src={aboutlog}
                alt=""
                className="  md:w-[32vw] md:h-[70vh] brightness-75 object-cover object-middle   rounded-md"
              />
            </div>
          </div>
        </div>

        <div className=" bg-sky-900 font-roboto w-full xl:h-[19rem] justify-evenly  ">
          <div className="md:flex  md:justify-center  px-[6rem]   h-full md:pt-20 md:pb-20 px-0 py-8 container mx-auto">
            <div className=" md:w-[40rem] xl:h-36 flex items-center space-x-6  ">
              <h1 className=" text-4xl font-semibold text-white outline outline-1 p-4 rounded-md">
                M
              </h1>
              <div>
                <p className="pt-7 text-white font-bold text-3xl">
                  Notre mission
                </p>
                <p className="text-white max-w-sm">
                  La mission principale de Grace Global Logistics est de
                  soutenir et d'accompagner ses clients dans la réussite de
                  leurs affaires et projets, contribuant ainsi au développement
                  durable et à la croissance économique de leurs communautés.
                </p>
              </div>
            </div>

            <div className=" md:w-[40rem] xl:h-36 flex items-center space-x-4   ">
              <h1 className=" text-4xl font-semibold text-white  outline outline-1 px-5 py-4 rounded-md">
                V
              </h1>
              <div>
                <p className="pt-7 text-white text-3xl font-bold">
                  Notre vision
                </p>
                <p className="text-white max-w-sm">
                  Notre vison est d’apporter des solutions logistiques et la
                  satisfaction à notre clientèle dans la rëpion par notre
                  service standard a un temps réduit et en toute sécurité dans
                  les normes ou standard.
                </p>
              </div>
            </div>

             
          </div>
        </div>

        {/* Why choose us */}
        <WhyChoose />

        {/* Team members  */}
        <OurPartners />
      </>
    );
};

export default About;
