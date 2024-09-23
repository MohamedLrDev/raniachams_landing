import Qualities from "./Qualities";
import local from "../assets/images/raniachams-local.svg"

const AboutUs = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-semibold text-[#2196F3] mb-6 text-center">
        À Propos De Nous
      </h1>

      <div className="flex flex-col lg:flex-row lg:space-x-6 justify-center mx-9 items-center lg:items-start">
        {/* Image Placeholder */}
        <div className="w-[500px] h-[350px] bg-gray-400 flex-shrink-0 mb-6 lg:mb-0 lg:mr-6 lg:self-start ">
          <img src={local} alt="" className=" saturate-130"/>
        </div>
        <div>
          <h2 className="text-xl lg:text-2xl font-semibold text-[#4CAF50]">
            RanyaChamsSolaire
          </h2>
          <p className="text-[#040316] text-xl">
            Nous sommes une société spécialisée dans la vente et l'installation
            de <span className="font-semibold">panneaux solaires</span> pour les
            particuliers et les espaces agricoles. Notre engagement envers la
            qualité et l'innovation guide nos actions, contribuant ainsi à la
            transition vers une énergie propre et renouvelable.
          </p>
          <hr className="mt-6 border-[1.5px] border-gray-300" />
          <div>
            <Qualities />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
