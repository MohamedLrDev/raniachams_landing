import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function ContactUs() {
  // Dummy contact information
  const phone = "+1234567890";
  const email = "example@example.com";
  const address = "123 Street, City, Country";

  return (
    <>
      <h2 className="text-2xl font-semibold text-[#2196F3] mb-6 text-center">Contact</h2>
      <div className="flex justify-center my-8">
        <div className="max-w-4xl w-full flex">
          <div className="w-1/2 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Contactez Nous</div>
              <p className="text-gray-700 text-base">
                Nous serions ravis d'avoir de vos nouvelles ! N'hésitez pas à
                nous contacter en utilisant le formulaire ci-dessous.
              </p>
              <div className="flex flex-col mt-6 space-y-6">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faPhone} className="text-blue-500 mr-2 text-2xl" />
                  <span>{phone}</span>
                </div>
                <div className="flex items-center mt-2">
                  <FontAwesomeIcon icon={faEnvelope} className="text-blue-500 mr-2 text-2xl" />
                  <span>{email}</span>
                </div>
                <div className="flex items-center mt-2">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-500 mr-2 text-2xl" />
                  <span>{address}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-white shadow-md rounded-lg overflow-hidden">
            <form className="px-6 py-4">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Nom
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-6 ">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="flex items-center justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;


// import React from "react";

// function ContactUs() {
//   return (
//     <>
//       <h2 className="text-2xl font-semibold text-[#2196F3] mb-6 text-center">Avantages</h2>
//       <div className="flex justify-center mt-8">
//         <div className="max-w-4xl w-full flex">
//           {/* Contact Information Section */}
//           <div className="w-1/2 bg-white shadow-md rounded-lg overflow-hidden">
//             <div className="px-6 py-4">
//               <div className="font-bold text-xl mb-2">Contactez Nous</div>
//               <p className="text-gray-700 text-base">
//                 Nous serions ravis d'avoir de vos nouvelles ! N'hésitez pas à
//                 nous contacter en utilisant le formulaire ci-dessous.
//               </p>
//             </div>
//           </div>
//           {/* Contact Form Section */}
//           <div className="w-1/2 bg-white shadow-md rounded-lg overflow-hidden">
//             <form className="px-6 py-4">
//               <FormField label="Nom" id="name" type="text" placeholder="Votre Nom" />
//               <FormField label="Email" id="email" type="email" placeholder="Votre Email" />
//               <FormField label="Message" id="message" type="textarea" placeholder="Votre Message" rows="4" />
//               <div className="flex items-center justify-end">
//                 <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
//                   Envoyer
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// // Reusable component for form fields
// const FormField = ({ label, id, type, placeholder, rows }) => {
//   return (
//     <div className="mb-4">
//       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
//         {label}
//       </label>
//       {type === "textarea" ? (
//         <textarea
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id={id}
//           rows={rows}
//           placeholder={placeholder}
//         ></textarea>
//       ) : (
//         <input
//           className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//           id={id}
//           type={type}
//           placeholder={placeholder}
//         />
//       )}
//     </div>
//   );
// };

// export default ContactUs;
