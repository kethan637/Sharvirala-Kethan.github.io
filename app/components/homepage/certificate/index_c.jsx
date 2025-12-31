

// "use client";  // ✅ Required for useState

// import { useState } from "react";
// import { certificatesData } from "@/utils/data/certificates";
// import Image from "next/image";

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

//       {/* Static Grid Layout for Certificates */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center p-6">
//         {certificatesData.map((certificate, id) => (
//           <div 
//             key={id} 
//             className="w-full flex flex-col items-center justify-center transition-all duration-500 rounded-lg group relative hover:scale-105 cursor-pointer"
//             onClick={() => setSelectedCertificate(certificate)}
//           >
//             <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
//               <div className="flex flex-col items-center justify-center gap-3 p-6">
//                 <div className="h-24 sm:h-28">
//                   <Image
//                     src={certificate.image}
//                     alt={certificate.title}
//                     width={120}
//                     height={80}
//                     className="h-full w-auto rounded-lg"
//                   />
//                 </div>
//                 <p className="text-white text-sm sm:text-lg text-center">
//                   {certificate.title}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal Popup */}
//       {selectedCertificate && (
//   <div className="fixed inset-0 w-screen h-screen bg-black bg-opacity-90 flex items-center justify-center z-[9999]">
//     <div className="relative p-5 bg-white rounded-lg max-w-3xl w-full flex flex-col items-center">
//       <button
//         className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-700"
//         onClick={() => setSelectedCertificate(null)}
//       >
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

"use client";

import { useState } from "react";
import Image from "next/image";
import { certificatesData } from "@/utils/data/certificates";

/* 🔐 Password (UI-level only) */
const ACADEMIC_PASSWORD = "Kethan@2001";

/* 🔁 TOGGLE ACADEMIC LOCK */
const ENABLE_ACADEMIC_LOCK = true;

function Certificate() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isAcademicUnlocked, setIsAcademicUnlocked] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");

  return (
    <div
      id="certificate"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      {/* Section Title */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] text-white p-2 px-5 text-xl rounded-md">
            Certificates
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">

        {/* 🔒 Academic Lock Card (NORMAL SIZE, NOT BIG) */}
        {ENABLE_ACADEMIC_LOCK && !isAcademicUnlocked && (
          <div
            className="flex flex-col items-center justify-center rounded-lg border border-[#1f223c] bg-[#11152c] p-6 cursor-pointer hover:scale-105 transition-all"
            onClick={() => setShowPasswordModal(true)}
          >
            <div className="text-3xl mb-3">🔒</div>
            <p className="text-white text-sm sm:text-lg text-center">
              Academic Certificates
            </p>
            <p className="text-gray-400 text-xs mt-1">
              10th · 12th · B.Tech
            </p>
          </div>
        )}

        {/* 🔓 Academic Certificates */}
        {certificatesData
          .filter((c) =>
            ENABLE_ACADEMIC_LOCK
              ? isAcademicUnlocked && c.category === "academic"
              : c.category === "academic"
          )
          .map((certificate, id) => (
            <CertificateCard
              key={`academic-${id}`}
              certificate={certificate}
              onClick={setSelectedCertificate}
            />
          ))}

        {/* 🌐 Normal Certificates */}
        {certificatesData
          .filter((c) => c.category !== "academic")
          .map((certificate, id) => (
            <CertificateCard
              key={id}
              certificate={certificate}
              onClick={setSelectedCertificate}
            />
          ))}
      </div>

{selectedCertificate && (
  <div
    className="fixed inset-0 bg-black bg-opacity-90 z-[9999] overflow-y-auto"
    onClick={() => setSelectedCertificate(null)}
  >
    <div className="min-h-screen flex items-start justify-center p-4">
      <div
        className="relative bg-white rounded-lg max-w-3xl w-full my-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 🔝 Sticky Header (Close + Download) */}
        <div className="sticky top-0 z-10 bg-white flex justify-between items-center p-3 border-b">
          <button
            className="bg-red-500 text-white px-3 py-1 rounded-full"
            onClick={() => setSelectedCertificate(null)}
          >
            ✕
          </button>

          {/* ⬇️ Download Button */}
          <a
            href={selectedCertificate.image}
            download
            className="bg-violet-600 text-white px-4 py-1 rounded-full text-sm hover:bg-violet-700"
          >
            ⬇ Download
          </a>
        </div>

        {/* 📜 Scrollable Content */}
        <div className="p-5 flex flex-col items-center">
          <Image
            src={selectedCertificate.image}
            alt={selectedCertificate.title}
            width={900}
            height={1200}
            className="rounded-lg max-w-full h-auto"
          />

          <p className="text-black text-lg mt-4 text-center">
            {selectedCertificate.title}
          </p>
        </div>
      </div>
    </div>
  </div>
)}



      {/* 🔑 Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]">
          <div className="bg-[#11152c] p-6 rounded-lg w-[90%] max-w-sm">
            <h3 className="text-white text-lg mb-3 text-center">
              Enter Password
            </h3>

            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              className="w-full p-2 rounded bg-[#0d1224] text-white border border-gray-600"
              placeholder="Enter password"
            />

            {passwordError && (
              <p className="text-red-400 text-sm mt-2">{passwordError}</p>
            )}

            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 bg-gray-600 text-white rounded"
                onClick={() => {
                  setShowPasswordModal(false);
                  setPasswordInput("");
                  setPasswordError("");
                }}
              >
                Cancel
              </button>

              <button
                className="px-4 py-2 bg-violet-600 text-white rounded"
                onClick={() => {
                  if (passwordInput === ACADEMIC_PASSWORD) {
                    setIsAcademicUnlocked(true);
                    setShowPasswordModal(false);
                    setPasswordInput("");
                    setPasswordError("");
                  } else {
                    setPasswordError("Incorrect password");
                  }
                }}
              >
                Unlock
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* 🧩 Reusable Card */
function CertificateCard({ certificate, onClick }) {
  return (
    <div
      className="flex flex-col items-center justify-center rounded-lg border border-[#1f223c] bg-[#11152c] p-6 cursor-pointer hover:scale-105 transition-all"
      onClick={() => onClick(certificate)}
    >
      <Image
        src={certificate.image}
        alt={certificate.title}
        width={120}
        height={80}
        className="rounded-lg"
      />
      <p className="text-white text-sm sm:text-lg text-center mt-3">
        {certificate.title}
      </p>
    </div>
  );
}

export default Certificate;
