import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Form from "../components/Form/Form";

const Contact = () => {
  return (
    <>
      {/* header image */}
      <div className="backgroundImage -z-10 bg-cover bg-bottom relative bg-blue-600 ">
        <div className="bg-e-global-color-1046ecd transition-all -z-20 duration-300 overlay" />
        <div className="lg:pt-52 pt-2  ">
          <div className=" w-3/4 h-72 mx-auto align-center pt-24 text-center  ">
            <span className="">
              <h1 className=" pb-10 text-white text-[2.7rem] font-bold  w-100 h-16 text-6xl mt-4">
                Contactez-nous{" "}
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
      <div className=" w-full font-roboto pt-[4rem] px-8 bg-slate-100 bg-gradient-to-b from-white">
        <div className="md:flex justify-evenly   ">
          <div className="  lg:w-1/2 p-6   ">
            <h1 className="uppercase lg:text-4xl text-2xl font-semibold">
              Coordonnées
            </h1>
            <p className="mt-6 max-w-lg ">
              Si vous avez des questions sur nos offres pour les particuliers ou
              les entreprises, vous pouvez toujours nous envoyer un e-mail ou
              nous appeler via les coordonnées ci-dessous. Nous répondrons sous
              24 heures.
            </p>
            <div className="flex flex-col  items-start text-black  container mx-auto">
              <div className=" md:w-[40rem]  xl:h-36 flex items-center space-x-6  ">
                <h1 className=" text-4xl font-semibold  outline outline-1 p-4 rounded-md">
                  <CiLocationOn />
                </h1>
                <div>
                  <p className="pt-7 font-roboto font-bold ">Visitez-nous</p>
                  <p className=" max-w-sm">
                    Nous répondons aux exigences de nos clients pour un service
                    personnalisé et professionnel en proposant des solutions
                    innovantes de chaîne d'approvisionnement.{" "}
                  </p>
                </div>
              </div>

              <div className=" md:w-[40rem] xl:h-36 flex items-center space-x-4   ">
                <h1 className=" text-4xl font-semibold   outline outline-1 px-5 py-4 rounded-md">
                  <FaPhoneAlt />
                </h1>
                <div>
                  <p className="pt-7 font-bold ">Appelez-nous au</p>
                  <p className=" max-w-sm">
                    Nous recherchons constamment de nouvelles opportunités. Par
                    conséquent, une partie importante de notre vision est
                    d'attirer et de fidéliser.
                  </p>
                </div>
              </div>

              <div className=" md:w-[40rem] xl:h-36 flex items-center space-x-4   ">
                <h1 className=" text-4xl font-semibold  outline outline-1 py-4 px-5 rounded-md">
                  <CiMail />
                </h1>
                <div>
                  <p className="pt-7 font-bold font-roboto ">
                    Envoyez-nous un e-mail à
                  </p>
                  <p className=" max-w-sm">
                    Nous répondons aux demandes de nos clients pour un service
                    personnalisé et professionnel en proposant des solutions
                    innovantes de chaîne d'approvisionnement.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* working hours section */}

          <div className="lg:w-1/4 mt-8  ">
            <div className="p-4 border-2">
              <h2 className="uppercase font-semibold text-3xl pt-1">
                Heures d'ouverture
              </h2>
              <p className="pt-4">Voici nos heures d'ouverture de bureau </p>
              <div className="justify-between flex mt-4 border-b-2 p-4">
                <p>Lundi</p>
                <p>9:00am-17.00 pm </p>
              </div>
              <div className="justify-between flex mt-4 border-b-2 p-4">
                <p>Mardi</p>
                <p>9:00am-17.00 pm </p>
              </div>
              <div className="justify-between flex mt-4 border-b-2 p-4">
                <p>Mercredi</p>
                <p>9:00am-17.00 pm </p>
              </div>
              <div className="justify-between flex mt-4 border-b-2 p-4">
                <p>Jeudi</p>
                <p>9:00am-17.00 pm </p>
              </div>
              <div className="justify-between flex mt-4 border-b-2 p-4">
                <p>Vendredi</p>
                <p>9:00am-17.00 pm </p>
              </div>
              <div className="justify-between flex mt-4   p-4">
                <p>Sam & Dimanche</p>
                <p className=" text-red-500">Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact form  */}
      <Form />

      {/* embedded map  */}
      <div className="">
         
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d17794.315379208823!2d29.215795514955243!3d-1.6762036679736274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sgoma%20mikeno!5e0!3m2!1sen!2srw!4v1722692852013!5m2!1sen!2srw"
          className="w-full"
          height="450"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
