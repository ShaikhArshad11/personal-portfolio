import React from "react";
import dynamic from "next/dynamic";

const AceternityTimeline = dynamic(
  () => import("./ui/timeline").then((m) => m.Timeline),
  { ssr: false }
);

const Timeline = () => {

  // const data = [
  //   {
  //     title: "2025",
  //     content: (
  //       <div>
          
  //         <div className="grid grid-cols-1 gap-4">
  //           {/* <img
  //             src="https://assets.aceternity.com/templates/startup-1.webp"
  //             alt="startup template"
  //             width={500}
  //             height={500}
  //             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //           />
  //           <img
  //             src="https://assets.aceternity.com/templates/startup-2.webp"
  //             alt="startup template"
  //             width={500}
  //             height={500}
  //             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //           />
  //           <img
  //             src="https://assets.aceternity.com/templates/startup-3.webp"
  //             alt="startup template"
  //             width={500}
  //             height={500}
  //             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //           />
  //           <img
  //             src="https://assets.aceternity.com/templates/startup-4.webp"
  //             alt="startup template"
  //             width={500}
  //             height={500}
  //             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //           /> */}

  //           <p>Software Developer</p>
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Early 2023",
  //     content: (
  //       <div>
  //         <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
  //           I usually run out of copy, but when I see content this big, I try to
  //           integrate lorem ipsum.
  //         </p>
  //         <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
  //           Lorem ipsum is for people who are too lazy to write copy. But we are
  //           not. Here are some more example of beautiful designs I built.
  //         </p>
  //         <div className="grid grid-cols-2 gap-4">
  //           <img
  //             src="https://assets.aceternity.com/pro/hero-sections.png"
  //             alt="hero template"
  //             width={500}
  //             height={500}
  //             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //           />
  //           <img
  //             src="https://assets.aceternity.com/features-section.png"
  //             alt="feature template"
  //             width={500}
  //             height={500}
  //             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //           />
  //           <img
  //             src="https://assets.aceternity.com/pro/bento-grids.png"
  //             alt="bento template"
  //             width={500}
  //             height={500}
  //             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //           />
  //           <img
  //             src="https://assets.aceternity.com/cards.png"
  //             alt="cards template"
  //             width={500}
  //             height={500}
  //             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //           />
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     title: "Changelog",
  //     content: (
  //       <div>
  //         <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
  //           Deployed 5 new components on Aceternity today
  //         </p>
  //         <div className="mb-8">
  //           <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
  //             ✅ Card grid component
  //           </div>
  //           <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
  //             ✅ Startup template Aceternity
  //           </div>
  //           <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
  //             ✅ Random file upload lol
  //           </div>
  //           <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
  //             ✅ Himesh Reshammiya Music CD
  //           </div>
  //           <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
  //             ✅ Salman Bhai Fan Club registrations open
  //           </div>
  //         </div>
  //         <div className="grid grid-cols-2 gap-4">
  //           <img
  //             src="https://assets.aceternity.com/pro/hero-sections.png"
  //             alt="hero template"
  //             width={500}
  //             height={500}
  //             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //           />
  //           <img
  //             src="https://assets.aceternity.com/features-section.png"
  //             alt="feature template"
  //             width={500}
  //             height={500}
  //             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //           />
  //           <img
  //             src="https://assets.aceternity.com/pro/bento-grids.png"
  //             alt="bento template"
  //             width={500}
  //             height={500}
  //             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //           />
  //           <img
  //             src="https://assets.aceternity.com/cards.png"
  //             alt="cards template"
  //             width={500}
  //             height={500}
  //             className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  //           />
  //         </div>
  //       </div>
  //     ),
  //   },
  // ];
  
  const data = [
  {
    title: "May 2025 (Present)",
    content: (
      <div>
        <h3 className="text-2xl font-semibold">Software Developer</h3>
        <p className="text-sm mt-2 text-neutral-700">
          Currently working at <b>AL-MAWA INTERNATIONAL (OPC) PVT LTD</b> as a
          Software / Full-Stack Developer. Building digital solutions, managing
          projects, and continuously improving development workflow.
        </p>

        <div className="mt-4 grid grid-cols-2 gap-3 text-white">
          <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
            Next.js / React
          </span>
          <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
            MongoDB / Node
          </span>
          <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
            API Development
          </span>
          <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
            UI / UX & Performance
          </span>
        </div>
      </div>
    ),
  },

  {
    title: "January 2025",
    content: (
      <div>
        <h3 className="text-lg font-semibold">Freelance Full-Stack Developer</h3>
        <p className="text-sm mt-2 text-neutral-700">
          Started working with clients and real-world projects. Building modern,
          responsive, and performance-focused applications.
        </p>

        <ul className="mt-4 text-xs space-y-2 text-black">
          <li> Client Projects & Deployments</li>
          <li> Business Websites & Web Apps</li>
          <li> SEO, Performance & Optimization</li>
        </ul>
      </div>
    ),
  },

  {
    title: "September 2024",
    content: (
      <div>
        <h3 className="text-lg font-semibold">MSc — Computer Science</h3>
        <p className="text-sm mt-2 text-black">
          Successfully completed <b>Master of Computer Science</b>. Built strong
          technical foundation, problem-solving mindset, and professional
          discipline.
        </p>

        <div className="mt-4 grid grid-cols-2 gap-3 text-white">
  <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
    Advanced Programming & OOPS
  </span>
  <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
    Data Structures & Algorithms
  </span>
  <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
    Database & Data Engineering
  </span>
  <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
    Machine Learning & Data Science
  </span>
  <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
    Artificial Intelligence Concepts
  </span>
  <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
    Cloud Computing & Virtualization
  </span>
  <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
    Distributed & Advanced Operating Systems
  </span>
  <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
    Web Technologies & Full-Stack Concepts
  </span>
  <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
    Software Engineering & SDLC
  </span>
  <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
    Cybersecurity Basics
  </span>
</div>

      </div>
    ),
  },

   {
    title: "August 2024",
    content: (
      <div>
  <h3 className="text-lg font-semibold">
    Web Development Intern
  </h3>

  <p className="text-sm mt-2 text-neutral-700 ">
    Successfully completed a <b>Web Development Internship at CodSoft</b>, where I worked on assigned real-world development tasks and projects. The internship was performance-based, and the certificate was awarded only upon successful completion of all assigned work, ensuring strong practical learning and execution.
  </p>

  <div className="mt-4 grid grid-cols-2 gap-3 text-white">
  {/* Added Data Science & ML Skills */}
  <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
    React.js
  </span>
  <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
    JavaScript
  </span>
</div>
</div>

    ),
  },

   {
    title: "March 2023",
    content: (
      <div>
  <h3 className="text-lg font-semibold">
    Data Science Intern
  </h3>

  <p className="text-sm mt-2 text-neutral-700 ">
    Successfully completed a <b>Data Science Internship at iNeuron</b>, gaining hands-on industry exposure, working on real-time data-driven problem solving, and strengthening analytical & technical capabilities.

  </p>

  <div className="mt-4 grid grid-cols-2 gap-3 text-white">
  {/* Added Data Science & ML Skills */}
  <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
    Python Programming
  </span>
  <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
    Data Science & Analytics
  </span>
  <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
    Machine Learning
  </span>
  <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
    Feature Engineering & Model Selection
  </span>
  <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
    Data Cleaning & Preprocessing
  </span>
  <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
    Exploratory Data Analysis (EDA)
  </span>
</div>
</div>

    ),
  },

  {
    title: "July 2022",
    content: (
      <div>
  <h3 className="text-lg font-semibold">
    Foundations & Skill Development
  </h3>

  <p className="text-sm mt-2 text-neutral-700 ">
    Successfully completed <b>Bachelor's of Computer Science</b> from
    Savitribai Phule Pune University. Built strong technical foundation,
    analytical thinking, and professional discipline through rigorous
    academic learning and practical projects.
  </p>

  <div className="mt-4 grid grid-cols-2 gap-3 text-white">
    <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
      Programming Fundamentals (C / C++)
    </span>
    <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
      Data Structures & Algorithms
    </span>
    <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
      Object Oriented Programming (Java)
    </span>
    <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
      Database Management (SQL & PL/SQL)
    </span>
    <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
      Operating Systems & Computer Networks
    </span>
    <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
      Web Technologies (HTML, CSS, JS, React basics)
    </span>
    <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
      Software Engineering & SDLC
    </span>
    <span className="px-3 py-2 bg-neutral-200 dark:bg-neutral-800 rounded-lg text-xs">
      Problem Solving & Logical Thinking
    </span>
  </div>
</div>

    ),
  },
];

  
  return (
    <div className="kura_tm_section mt-20" id="timeline">
      {/* <div className="kura_tm_timeline">
        <div className="container">
          <div className="kura_tm_main_title">
            <span>Timeline</span>
            <h3>Working Period</h3>
          </div>
          <div className="timeline_list">
            <ul>
              <li className="wow fadeInUp" data-wow-duration=".7s">
                <div className="list_inner">
                  <span>April, 2019 - Today</span>
                </div>
                <div className="list_inner">
                  <span>Head Designer &amp; Co-founder</span>
                </div>
                <div className="list_inner">
                  <span>Alan Klein Design, London</span>
                </div>
              </li>
              <li
                className="wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".2s"
              >
                <div className="list_inner">
                  <span>September, 2018 - April, 2019</span>
                </div>
                <div className="list_inner">
                  <span>Creative Director &amp; Senior Designer</span>
                </div>
                <div className="list_inner">
                  <span>Raxuna Poc, New York</span>
                </div>
              </li>
              <li
                className="wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".4s"
              >
                <div className="list_inner">
                  <span>October, 2015 - September, 2018</span>
                </div>
                <div className="list_inner">
                  <span>Head Designer</span>
                </div>
                <div className="list_inner">
                  <span>Arimana Co. Ltd, Amsterdam</span>
                </div>
              </li>
              <li
                className="wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".6s"
              >
                <div className="list_inner">
                  <span>July, 2012 - October, 2015</span>
                </div>
                <div className="list_inner">
                  <span>Senior UX &amp; UI Designer</span>
                </div>
                <div className="list_inner">
                  <span>Baxdoro Design, London</span>
                </div>
              </li>
              <li
                className="wow fadeInUp"
                data-wow-duration=".7s"
                data-wow-delay=".8s"
              >
                <div className="list_inner">
                  <span>March, 2010 - July, 2012</span>
                </div>
                <div className="list_inner">
                  <span>Junior UX Designer</span>
                </div>
                <div className="list_inner">
                  <span>Simono Design Group, London</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

     <AceternityTimeline
 data={data}
/>

    </div>
  );
};

export default Timeline;
