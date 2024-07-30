import React from 'react'

import customs from "../assets/customs.jpeg";
import warehouse from "../assets/warehouse.jpeg";
import aboutlog from "../assets/aboutlog.jpeg";
import atruck from "../assets/atruck.jpeg";

import plane from "../assets/plane.jpg";
import ship from "../assets/ship.jpg";


const OurServices = () => {
  return (
    <div>
      <h1 className="font-roboto text-center text-5xl text-blue-900  font-bold my-[1rem] p-8">
        Nos services
      </h1>
      <div className="bg-white p-2 lg:space-x-4 flex lg:flex-row flex-col items-center  lg:justify-between  lg:px-24 font-roboto">
        <div className="lg:w-1/3 p-8 text-center flex flex-col items-center space-y-4">
          <img src={ship} className="bg-cover brightness-75" alt="" />
          <h2 className="font-semibold text-lg">Transport maritime</h2>
          <p className="max-w-xs max-h-8 ">
            Transport maritime fiable et économique, de la gestion à la
            livraison, pour vos envois mondiaux.
          </p>
        </div>
        <div className="lg:w-1/3 p-8 text-center flex flex-col items-center space-y-4">
          <img src={plane} className="bg-cover brightness-75 " alt="" />
          <h2 className="font-semibold text-lg">Transport aérien</h2>
          <p className="max-w-xs max-h-8 ">
            Transport aérien rapide et fiable pour vos envois internationaux,
            avec gestion des formalités douanières et livraison sécurisée.
          </p>
        </div>
        <div className="lg:w-1/3 p-8 text-center space-y-4 flex flex-col items-center">
          <img src={atruck} className="bg-cover brightness-75" alt="" />
          <h2 className="font-bold text-lg">Transport routier</h2>
          <p className="max-w-xs max-h-8   ">
            Transport routier fiable et flexible pour vos marchandises, avec
            couverture étendue et livraison précise.
          </p>
        </div>
      </div>

      <div className="bg-white p-2 lg:space-x-4 flex lg:flex-row flex-col items-center  lg:justify-between font-roboto mb-[5rem] mt-[2rem]  lg:px-24">
        <div className="lg:w-1/3 p-8 text-center space-y-4 flex flex-col items-center">
          <img
            src={customs}
            className="bg-cover h-[15rem] w-[20rem] object-cover  brightness-75"
            alt=""
          />
          <h2 className="font-bold text-2xl">Dédouanement</h2>
          <p className="max-w-xs max-h-8 ">
            Le dédouanement est essentiel pour l'import/export. Nous gérons les
            formalités et documents nécessaires, assurant un passage en douane
            rapide et sans tracas.
          </p>
        </div>
        <div className="lg:w-1/3 p-8 text-center flex flex-col items-center space-y-4">
          <img
            src={warehouse}
            className="bg-cover h-[15rem] w-[20rem]  object-cover object-top brightness-75"
            alt=""
          />
          <h2 className="font-semibold text-xl">Entreposage</h2>
          <p className="max-w-xs max-h-8  ">
            Nous offrons des services d'entreposage sécurisés et modernes, avec
            gestion des stocks, préparation des commandes et expédition.
          </p>
        </div>
        <div className="lg:w-1/3 p-8 text-center flex flex-col items-center space-y-4">
          <img
            src={aboutlog}
            className="bg-cover h-[15rem] w-[20rem] object-cover   brightness-75 "
            alt=""
          />
          <h2 className="text-lg font-semibold">Emballage de produits</h2>
          <p className="max-w-xs max-h-8 ">
            L'emballage de produits protège vos marchandises durant le
            transport. Nous proposons des solutions adaptées et conformes pour
            garantir une arrivée en parfait état.
          </p>
        </div>
      </div>
    </div>
  );
}

export default OurServices