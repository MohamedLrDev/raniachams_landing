import React from "react";
import solarPanel from "../assets/images/solarpanel.png";

const Advantages = () => {
  return (
    <div className="container mx-auto  ">
      <h2 className="text-2xl font-semibold text-transform: capitalize text-[#2196F3]  text-center">
        Les avantages des panneaux solaires
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between">
        <div className="max-w-md lg:max-w-lg mx-auto mb-4 lg:mb-0">
          <img className="w-full h-auto" src={solarPanel} alt="eco-homme" />
        </div>
        <div className="container xl:mr-20 max-w-md text-[#040316]">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Économies de coûts :</h3>
            <ul className="list-disc text-lg pl-5">
              <li>
                Avec nos panneaux solaires, économisez jusqu'à 50% sur votre
                facture d'électricité chaque mois.
              </li>
              <li>
                Profitez de réductions spéciales disponibles uniquement sur
                notre site web, vous permettant d'économiser encore plus sur
                votre investissement solaire.
              </li>
            </ul>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            Avantages environnementaux :
          </h3>
          <ul className="list-disc text-lg pl-5">
            <li>
              Contribuez à la protection de l'environnement en choisissant
              l'énergie solaire, une source propre et renouvelable.
            </li>
            <li>
              Réduisez votre empreinte carbone et participez à la lutte contre
              le changement climatique en passant à l'énergie solaire.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
