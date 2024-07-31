 
import { IoCheckbox } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import { FaHandHolding } from "react-icons/fa";
import { Button2 } from "../components/Button/ButtonContact";
import OurServices from "../sections/OurServices";

const Services = () => {
  return (
    <>
      <div className="backgroundImage1 -z-10 bg-cover bg-center relative bg-blue-600 ">
        <div className="bg-e-global-color-1046ecd transition-all -z-20 duration-300 overlay" />
        <div className="lg:pt-2 pt-34  ">
          <div className=" w-3/4 h-72 mx-auto align-center pt-24 text-center  ">
            <span className="">
              <h1 className=" pb-10 text-white text-[2.7rem] font-bold  w-100 h-16 text-6xl mt-4">
                Nos services
              </h1>
            </span>
            <span>
              <p className=" text-white text-xl lg:text-2xl font-light font-roboto mt-4">
                Votre partenaire logistique de confiance{" "}
              </p>
            </span>
          </div>
        </div>
      </div>

      {/* header text  */}

      <div className=" w-full pt-[4rem]  ">
        <div className="md:flex font-roboto lg:px-[5rem] px-[2rem] space-y-10 lg:space-y-0  mb-[7rem] justify-between items-center    ">
          <div className=" lg:w-1/2 space-y-[2rem] lg:space-y-[0rem]   ">
            <p className="font-semibold border-l-4 max-w-screen-xl border-l-blue-800 pl-2 lg:text-5xl     text-lg ">
              SERVICES LOGISTIQUES ET DE TRANSPORT IMBATTABLES
            </p>
          </div>
          <div className="lg:w-1/2 space-y-4    ">
            <p className="mt-[1.2rem] ">
              Grace Global Logistics est la principale entreprise de services
              logistiques au Rwanda et propose des solutions de transport.
            </p>
            <p>
              Nous avons une vaste expérience dans les solutions logistiques
              spécifiques aux industries terrestres, comme la logistique
              pharmaceutique, le commerce de détail et l'automobile par voie
              aérienne ou routière. Nous acheminons vos marchandises en toute
              sécurité vers des destinations mondiales grâce à nos excellents
              services de transport maritime. Nous offrons des expéditions
              rapides et efficaces, sans retard.
            </p>
          </div>
        </div>
      </div>

      {/* Services */}

      <OurServices />

      <div className=" bg-sky-900 w-full font-roboto   ">
        <h1 className="font-roboto text-center text-4xl text-white  font-bold pt-[2.5rem]">
          Comment fonctionne Grace Global Logistics{" "}
        </h1>
        <div className="md:flex md:justify-evenly   h-full md:pt-20 md:pb-20 px-0 py-8 container mx-auto">
          <div className=" md:w-[40rem]  flex flex-col items-center space-x-6  ">
            <h1 className=" text-4xl font-semibold text-white outline outline-1 p-4 rounded-md">
              <IoCheckbox />
            </h1>
            <div className="space-y-4">
              <p className="pt-5 text-white text-center font-bold text-lg">
                Recevoir la commande{" "}
              </p>
              <p className="text-white max-w-xs text-center">
                Recevoir la commande consiste à enregistrer et vérifier
                soigneusement chaque expédition, assurant la précision des
                informations pour un traitement efficace.
              </p>
            </div>
          </div>

          <div className=" md:w-[40rem] xl:h-36 flex flex-col items-center space-x-4   ">
            <h1 className=" text-4xl font-semibold text-white outline outline-1 px-5 py-4 rounded-md">
              <FaTruck />
            </h1>
            <div className="space-y-4">
              <p className="pt-5 text-white text-center font-bold text-lg">
                Transporter l'expédition{" "}
              </p>
              <p className="text-white max-w-xs text-center">
                Transporter l'expédition consiste à acheminer les marchandises
                de manière sécurisée et ponctuelle en utilisant les moyens de
                transport les plus adaptés.
              </p>
            </div>
          </div>

          <div className=" md:w-[40rem] xl:h-36 flex flex-col items-center space-x-4   ">
            <h1 className=" text-4xl font-semibold text-white outline outline-1 py-4 px-5 rounded-md">
              <FaHandHolding />
            </h1>
            <div className="space-y-4">
              <p className="pt-5 text-white text-center font-bold text-lg">
                Livrer l'expédition{" "}
              </p>
              <p className="text-white max-w-xs text-center">
                Livrer l'expédition consiste à acheminer les marchandises
                jusqu'à leur destination finale en respectant les délais et les
                exigences du client.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-8 pb-10">
          <Button2 text={"Contactez-nous"} />
        </div>
      </div>

      {/*  */}
    </>
  );
};

export default Services;
