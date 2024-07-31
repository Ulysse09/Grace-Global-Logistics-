import React from "react";

import { IoIosTimer } from "react-icons/io";
import { RiGlobalLine } from "react-icons/ri";
import { MdDeliveryDining } from "react-icons/md";
import { Button1 } from "../components/Button/Button";

const WhyChoose = () => {
  return (
    <div>
      <div className="from-gray-200 bg-gradient-to-b to-white">
        <h1 className="font-roboto text-center mx-auto lg:text-5xl text-3xl px-5   text-blue-900 pt-24 mb-[1rem]  font-bold lg:my-[2rem]">
          Pourquoi nous choisir{" "}
        </h1>
        <div className="md:flex font-roboto md:justify-evenly px-8    w-full gap-2 pb-5 mb-24   transition duration-500">
          <div className="group p-5  flex-col flex items-center  space-y-10     rounded-lg    hover:rounded-lg mt-3 transition-colors duration-500 delay-200">
            <div className="bg-blue-900 group-hover:bg-white group-hover:border-4 group-hover:border-blue-900  w-24 h-24 rounded-full flex items-center justify-center mt-6  ml-auto mr-auto ">
              <IoIosTimer className="text-white text-5xl group-hover:text-blue-900  transition-colors duration-500 delay-150 " />
            </div>
            <h2 className="-200 mt-5 flex justify-center font-semibold text-xl">
              Support 24h/24{" "}
            </h2>
            <p className="  max-w-screen-sm lg:max-h-[6rem] lg:min-h-[6rem]">
              {" "}
              Chez Grace Global Logistics, nous nous engageons à fournir un
              support exceptionnel pour garantir le bon déroulement de vos
              opérations logistiques.
            </p>
            <Button1 text={"En savoir plus"} />
          </div>
          <div className=" group p-5     space-y-10 flex-col flex items-center      mt-3 transition-colors duration-500 delay-200  ">
            <div className="bg-blue-900 group-hover:bg-white group-hover:border-4   group-hover:border-blue-900 w-24 h-24 rounded-full flex items-center justify-center  mt-6">
              <RiGlobalLine className="text-white text-5xl group-hover:text-blue-900  transition-colors duration-500 delay-200" />
            </div>
            <h2 className=" mt-5 flex justify-center text-center font-semibold   text-xl">
              Chaîne d'approvisionnement mondiale{" "}
            </h2>
            <p className=" mt-14 max-w-screen-sm lg:max-h-[6rem]">
              Nous disposons d'un réseau solide de partenaires et de ressources
              à travers le monde, garantissant que vos marchandises soient
              transportées de manière efficace et fiable, peu importe leur
              destination.{" "}
            </p>
            <Button1 text={"En savoir plus"} />
          </div>
          <div className="group p-5  space-y-10 flex-col flex items-center      rounded-lg     hover:rounded-lg mt-3 mb-8 transition-colors duration-500 delay-200">
            <div className="bg-blue-900 group-hover:bg-white group-hover:border-4 group-hover:border-blue-900     flex items-center justify-center w-24 h-24 rounded-full ml-auto mr-auto mt-6">
              <MdDeliveryDining className="text-white text-5xl group-hover:text-blue-900 transition-colors duration-500 delay-200" />
            </div>
            <h2 className=" mt-5 flex justify-center font-semibold text-xl">
              Livraison à temps{" "}
            </h2>
            <p className=" mt-14 max-w-screen-sm lg:max-h-[6rem]  ">
              Notre engagement indéfectible pour une livraison à temps garantit
              que vos expéditions arrivent à destination comme prévu, vous
              aidant ainsi à atteindre vos objectifs commerciaux et à dépasser
              les attentes de vos clients.
            </p>

            <Button1 text={"En savoir plus"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
