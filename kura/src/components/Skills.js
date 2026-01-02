// import dynamic from "next/dynamic";
// import React, { useEffect } from "react";
// import { activeSkillProgress } from "../utilits";

// const ParallaxVideo = dynamic(import("./Parallax"), {
//   ssr: false,
// });

// const Skills = () => {
//   useEffect(() => {
//     window.addEventListener("scroll", activeSkillProgress);
//   });

//   return (
//     <div className="kura_tm_section" id="skills">
//       <div className="kura_tm_skills">
//         <div className="container">
//           <div className="skills_inner">
//             <div className="left">
//               <div className="kura_tm_main_title light">
//                 <span>Skills</span>
//                 <h3>Programming Skills</h3>
//               </div>
//               <div className="text wow fadeInUp" data-wow-duration=".7s">
//                 <p>
//                   For more than 20 years our experts have been accomplishing
//                   enough with modern Web Development, new generation web and app
//                   programming language.
//                 </p>
//               </div>
//               <div
//                 className="dodo_progress wow fadeInUp"
//                 data-wow-duration=".7s"
//                 data-wow-delay=".2s"
//               >
//                 <div className="progress_inner" data-value="95">
//                   <span>
//                     <span className="label">HTML &amp; CSS</span>
//                     <span className="number">95%</span>
//                   </span>
//                   <div className="background">
//                     <div className="bar">
//                       <div className="bar_in" style={{ width: "95%" }}></div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="progress_inner" data-value="80">
//                   <span>
//                     <span className="label">JavaScript</span>
//                     <span className="number">80%</span>
//                   </span>
//                   <div className="background">
//                     <div className="bar">
//                       <div className="bar_in" style={{ width: "80%" }}></div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="progress_inner" data-value="90">
//                   <span>
//                     <span className="label">WordPress</span>
//                     <span className="number">90%</span>
//                   </span>
//                   <div className="background">
//                     <div className="bar">
//                       <div className="bar_in" style={{ width: "90%" }}></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="right">
//               <ParallaxVideo />
//               <div
//                 className="my_image jarallax"
//                 data-speed="0"
//                 style={{
//                   backgroundImage: "url(/img/portfolio/2.jpg)",
//                 }}
//               ></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;



// Design 2

"use client";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase, FaGithub } from "react-icons/fa";
import { 
  SiJavascript, SiNextdotjs, SiTailwindcss, SiShadcnui, 
  SiExpress, SiMongodb, SiPython, SiMysql, SiVercel, SiCplusplus 
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-[#090909] transition-colors duration-300">
      <div className="container mx-auto px-4 py-20">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-blue-400 text-xl font-semibold tracking-widest">SKILLS</p>
          <h2 className="text-3xl md:text-7xl text-white">
            Expertise & Technical Strength
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-2">
            Hands-on experience with modern technologies across frontend, backend & more.
          </p>
        </div>

        {/* Wrapper */}
        <div className="space-y-10">

          {/* FRONTEND */}
          <SkillBlock title="Frontend" skills={[
            { icon: <FaHtml5 />, name: "HTML" },
            { icon: <FaCss3Alt />, name: "CSS" },
            { icon: <SiJavascript />, name: "JavaScript" },
            { icon: <FaReact />, name: "React" },
            { icon: <SiNextdotjs />, name: "Next.js" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <SiShadcnui />, name: "ShadCN UI" },
          ]} />

          {/* BACKEND */}
          <SkillBlock title="Backend"
            skills={[
              { icon: <SiPython />, name: "Python" },
              { icon: <FaNodeJs />, name: "Node.js" },
              { icon: <SiExpress />, name: "Express.js" },
              { icon: <SiNextdotjs />, name: "Next.js API Routes" },
              { icon: <TbApi />, name: "REST API" },
            ]}
          />

          {/* DATABASE */}
          <SkillBlock title="Database"
            skills={[
              { icon: <SiMysql />, name: "SQL" },
              { icon: <SiMongodb />, name: "MongoDB" },
              { icon: <FaDatabase />, name: "Database Design" }
            ]}
          />

          {/* OTHERS */}
          <SkillBlock title="Other Skills"
            skills={[
              { icon: <FaGithub />, name: "GitHub" },
              { icon: <SiVercel />, name: "Vercel" },
              { icon: <TbApi />, name: "CI / CD" },
              { icon: <SiCplusplus />, name: "DSA / OOPS" },
              { icon: <SiPython />, name: "Machine Learning" },
              { icon: <SiPython />, name: "AI Tools" },
            ]}
          />

        </div>
      </div>
    </section>
  );
}

/* ------------------- Skill Block Component ------------------- */
function SkillBlock({ title, skills }) {
  return (
    <div>
      <h3 className="text-xl font-semibold mb-4 text-white">
        {title}
      </h3>

      <div className="
        grid 
        grid-cols-[repeat(auto-fit,minmax(140px,1fr))] 
        gap-4 
        md:gap-6
      ">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="
              group
              bg-[#0d0d0d]
              border border-white/10
              rounded-xl
              py-6
              px-3
              text-center
              transition-all duration-300
              hover:-translate-y-2
              hover:border-blue-400
              hover:shadow-[0_10px_30px_rgba(0,172,255,.25)]
            "
          >
            <div className="text-[40px] mb-2 text-blue-400 group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <p className="text-sm font-medium text-white">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}



