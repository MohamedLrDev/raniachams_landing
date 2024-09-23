// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMedal } from "@fortawesome/free-solid-svg-icons";
// import { ReactComponent as MyIcon } from "../assets/images/icons/select_check_box.svg";
// import { ReactComponent as SupportIcon } from "../assets/images/icons/support_agent.svg";
// import { ReactComponent as PriceIcon } from '../assets/images/icons/payments.svg';


// const Qualities = () => {
//   return (
//     <div className="container mx-auto py-8">
//       <h1 className="text-2xl font-semibold text-[#2196F3] mb-6 text-center">
//         Les Raisons de Nous Préférer
//       </h1>
//       <div className="flex  justify-evenly pt-10 h-fit items-center">
//         <div className="text-center">
//           <div>
//             <MyIcon width="50px" height="50px" />
//           </div>
//           <div>
//             <span className=" text-xl font-semibold">Qualité</span>
//           </div>
//         </div>
//         <div className="text-center">
//           <div>
//           <PriceIcon width="50px" height="50px" />

//           </div>
//           <div>
//             <span className=" text-xl font-semibold">Autre</span>
//           </div>
//         </div>
//         <div className="text-center">
//           <div>
//             <SupportIcon width="50px" height="50px" />
//           </div>
//           <div>
//             <span className=" text-xl font-semibold">Encore une autre</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Qualities;
import React from "react";
import { ReactComponent as MyIcon } from "../assets/images/icons/select_check_box.svg";
import { ReactComponent as SupportIcon } from "../assets/images/icons/support_agent.svg";
import { ReactComponent as PriceIcon } from '../assets/images/icons/payments.svg';

const QualityItem = ({ icon, title }) => {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center mb-4">
        {React.cloneElement(icon, { fill: "#4CAF50", width: "65px", height: "65px" })}
      </div>
      <div>
        <span className="text-xl font-semibold">{title}</span>
      </div>
    </div>
  );
};

const Qualities = () => {
  return (
    <div className="container mx-auto ">
      {/* <h1 className="text-2xl font-semibold text-[#2196F3] mb-6 text-center">
        Les Raisons de Nous Préférer
      </h1> */}
      <div className="flex justify-evenly pt-10 h-fit items-center">
        <QualityItem
          icon={<MyIcon />}
          title="Qualité"
        />
        <QualityItem
          icon={<PriceIcon />}
          title="Prix resonable"
        />
        <QualityItem
          icon={<SupportIcon />}
          title="Service 24/24"
        />
      </div>
    </div>
  );
};

export default Qualities;
