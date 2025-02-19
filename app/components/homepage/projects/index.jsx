// import { projectsData } from '@/utils/data/projects-data';
// import ProjectCard from './project-card';

// const Projects = () => {

//   return (
//     <div id='projects' className="relative z-10  my-12 lg:my-24">
//       <div className="sticky top-10">
//         <div className="w-[60px] h-[60px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
//         <div className="flex items-center justify-start relative">
//           <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
//             PROJECTS
//           </span>
//           <span className="w-full h-[2px] bg-[#1a1443]"></span>
//         </div>
//       </div>

//       <div className="pt-24">
//         <div className="flex flex-col gap-6">
//           {projectsData.slice(0, 8).map((project, index) => (
//             <div
//               id={`sticky-card-${index + 1}`}
//               key={index}
//               className="sticky-card w-full mx-auto max-w-2xl sticky"
//             >
//               <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
//                 <ProjectCard project={project} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

// // below code is staitc display of projects
// import { projectsData } from '@/utils/data/projects-data';
// import ProjectCard from './project-card';

// const Projects = () => {
//   return (
//     <div id='projects' className="relative z-10 my-12 lg:my-24">
//       <div className="sticky top-10">
//         <div className="w-[60px] h-[60px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
//         <div className="flex items-center justify-start relative">
//           <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md">
//             PROJECTS
//           </span>
//           <span className="w-full h-[2px] bg-[#1a1443]"></span>
//         </div>
//       </div>

//       <div className="pt-24">
//         <div className="relative flex flex-col gap-12">
//           {projectsData.slice(0, 8).map((project, index) => (
//             <div
//               id={`sticky-card-${index + 1}`}
//               key={index}
//               className={`sticky top-[calc(4rem*${index})] w-full mx-auto max-w-2xl transition-all duration-500`}
//             >
//               <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s] bg-[#121212] p-4">
//                 <ProjectCard project={project} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

//projeect title is sticky
import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  return (
    <div id='projects' className="relative z-10 my-12 lg:my-24">
      {/* Sticky Title */}
      <div className="sticky top-0  z-50 py-4">
        <div className="relative flex items-center justify-start">
          <span className="bg-[#1a1443] w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Scrollable Projects Section */}
      <div className="pt-24 relative">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 8).map((project, index) => (
            <div
              key={index}
              id={`sticky-card-${index + 1}`}
              className="sticky top-[4rem] w-full mx-auto max-w-2xl transition-all duration-[0.5s]"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-500 bg-[#121212] p-4">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
