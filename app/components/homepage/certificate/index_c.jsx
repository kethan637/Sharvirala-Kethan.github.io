// import { certificatesData } from "@/utils/data/certificates";
// import Image from "next/image";
// import Marquee from "react-fast-marquee";

// function Certificate() {
//   return (
//     <div id="certificate" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
//       <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

//       <div className="flex justify-center -translate-y-[1px]">
//         <div className="w-3/4">
//           <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
//         </div>
//       </div>

//       <div className="flex justify-center my-5 lg:py-8">
//         <div className="flex items-center">
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//           <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
//             Certificates
//           </span>
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//         </div>
//       </div>

//       <div className="w-full my-12">
//         <Marquee
//           gradient={false}
//           speed={80}
//           pauseOnHover={true}
//           pauseOnClick={true}
//           delay={0}
//           play={true}
//           direction="left"
//         >
//           {certificatesData.map((certificate, id) => (
//             <div className="w-40 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
//               key={id}>
//               <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
//                 <div className="flex -translate-y-[1px] justify-center">
//                   <div className="w-3/4">
//                     <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-center justify-center gap-3 p-6">
//                   <div className="h-24 sm:h-28">
//                     <Image
//                       src={certificate.image}
//                       alt={certificate.title}
//                       width={120}
//                       height={80}
//                       className="h-full w-auto rounded-lg"
//                     />
//                   </div>
//                   <p className="text-white text-sm sm:text-lg text-center">
//                     {certificate.title}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Marquee>
//       </div>
//     </div>
//   );
// };

// export default Certificate;

// "use client";  // ✅ This makes it a client component

// import { useState } from "react";
// import { certificatesData } from "@/utils/data/certificates";
// import Image from "next/image";
// import Marquee from "react-fast-marquee";

// function Certificate() {
//   const [selectedCertificate, setSelectedCertificate] = useState(null);

//   return (
//     <div id="certificate" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
//       <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

//       <div className="flex justify-center -translate-y-[1px]">
//         <div className="w-3/4">
//           <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
//         </div>
//       </div>

//       <div className="flex justify-center my-5 lg:py-8">
//         <div className="flex items-center">
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//           <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
//             Certificates
//           </span>
//           <span className="w-24 h-[2px] bg-[#1a1443]"></span>
//         </div>
//       </div>

//       <div className="w-full my-12">
//         <Marquee
//           gradient={false}
//           speed={0}
//           pauseOnHover={true}
//           pauseOnClick={true}
//           delay={0}
//           play={true}
//           direction="centre"
//         >
//           {certificatesData.map((certificate, id) => (
//             <div 
//               key={id} 
//               className="w-40 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
//               onClick={() => setSelectedCertificate(certificate)}
//             >
//               <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
//                 <div className="flex -translate-y-[1px] justify-center">
//                   <div className="w-3/4">
//                     <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
//                   </div>
//                 </div>
//                 <div className="flex flex-col items-center justify-center gap-3 p-6">
//                   <div className="h-24 sm:h-28">
//                     <Image
//                       src={certificate.image}
//                       alt={certificate.title}
//                       width={120}
//                       height={80}
//                       className="h-full w-auto rounded-lg"
//                     />
//                   </div>
//                   <p className="text-white text-sm sm:text-lg text-center">
//                     {certificate.title}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Marquee>
//       </div>

//       {/* Modal Popup */}
//       {selectedCertificate && (
//         <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
//           <div className="relative p-5 bg-white rounded-lg max-w-3xl w-full flex flex-col items-center">
//             <button
//               className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-700"
//               onClick={() => setSelectedCertificate(null)}
//             >
//               ✕
//             </button>
//             <Image
//               src={selectedCertificate.image}
//               alt={selectedCertificate.title}
//               width={600}
//               height={400}
//               className="rounded-lg"
//             />
//             <p className="text-black text-lg mt-3">{selectedCertificate.title}</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Certificate;

"use client";  // ✅ Required for useState

import { useState } from "react";
import { certificatesData } from "@/utils/data/certificates";
import Image from "next/image";

function Certificate() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <div id="certificate" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Certificates
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Static Grid Layout for Certificates */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center p-6">
        {certificatesData.map((certificate, id) => (
          <div 
            key={id} 
            className="w-full flex flex-col items-center justify-center transition-all duration-500 rounded-lg group relative hover:scale-105 cursor-pointer"
            onClick={() => setSelectedCertificate(certificate)}
          >
            <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
              <div className="flex flex-col items-center justify-center gap-3 p-6">
                <div className="h-24 sm:h-28">
                  <Image
                    src={certificate.image}
                    alt={certificate.title}
                    width={120}
                    height={80}
                    className="h-full w-auto rounded-lg"
                  />
                </div>
                <p className="text-white text-sm sm:text-lg text-center">
                  {certificate.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup */}
      {selectedCertificate && (
  <div className="fixed inset-0 w-screen h-screen bg-black bg-opacity-90 flex items-center justify-center z-[9999]">
    <div className="relative p-5 bg-white rounded-lg max-w-3xl w-full flex flex-col items-center">
      <button
        className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-700"
        onClick={() => setSelectedCertificate(null)}
      >
              ✕
            </button>
            <Image
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              width={600}
              height={400}
              className="rounded-lg"
            />
            <p className="text-black text-lg mt-3">{selectedCertificate.title}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certificate;