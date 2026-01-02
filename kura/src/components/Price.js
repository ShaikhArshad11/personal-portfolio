import React, { useEffect, useRef, useState } from "react";

const achievements = [
  {
    icon: "",
    title: "Delivered 6+ Real-World Projects",
    description:
      "Built business websites, web apps, dashboards, and digital platforms — from planning to deployment.",
  },
  {
    icon: "",
    title: "Improved Website Performance",
    description:
      "Optimized websites resulting in up to 40% faster load times using modern frameworks and best practices.",
  },
  {
    icon: "",
    title: "Enhanced Business Online Presence",
    description:
      "Improved UI/UX, engagement, trust, and customer conversion through professional digital solutions.",
  },
  {
    icon: "",
    title: "Built Scalable Full-Stack Applications",
    description:
      "Developed secure and high-performance applications using Next.js, React, Node.js, Express, and MongoDB.",
  },
  {
    icon: "",
    title: "System Architecture & Secure Development",
    description:
      "Implemented authentication, APIs, dashboards, and database structures with maintainable architecture.",
  },
  {
    icon: "",
    title: "Strong CS Fundamentals",
    description:
      "Solid understanding of Data Structures, Algorithms, and System Design leading to efficient solutions.",
  },
  {
    icon: "",
    title: "Real-World Client Experience",
    description:
      "Worked with real clients, handled requirements, deployments, and production workflows.",
  },
  {
    icon: "",
    title: "Continuous Learning Mindset",
    description: "Always improving, innovating, and building impactful digital solutions.",
  },
];

export const certifications = [
  {
    icon: "",
    title: "Master of Computer Science (MSc – CS)",
    organization: "Savitribai Phule Pune University",
    description:
      "Built a strong foundation in programming, database systems, AI, OS, software engineering, and advanced computing concepts.",
  },
  {
    icon: "",
    title: "Bachelor of Computer Science (BSc – CS)",
    organization: "Savitribai Phule Pune University",
    description:
      "Developed core knowledge in programming fundamentals, data structures, databases, operating systems, and web technologies.",
  },
  {
    icon: "",
    title: "Web Development Internship",
    organization: "CodSoft",
    description:
      "Completed performance-based internship delivering real-world React & JavaScript projects with professional execution.",
  },
  {
    icon: "",
    title: "Data Science Internship",
    organization: "iNeuron",
    description:
      "Hands-on experience in Python, Machine Learning, EDA, Feature Engineering, and solving industry-level data problems.",
  },
  {
    icon: "",
    title: "Full Stack Data Science Bootcamp 2.0",
    organization: "iNeuron",
    description:
      "Advanced training program covering Python, Data Science, Machine Learning, Deep Learning, Analytics, Deployment, and real-world project building.",
  },
  {
    icon: "",
    title: "DSA in Python",
    organization: "iNeuron",
    description:
      "Strengthened problem-solving skills through Data Structures & Algorithms using Python, improving logical and analytical abilities.",
  },
  {
    icon: "",
    title: "React.js Certification",
    organization: "KG Coding",
    description:
      "Learned modern React development concepts including components, hooks, props, state management, and building dynamic user interfaces.",
  },
  {
    icon: "",
    title: "Academic & Professional Training",
    organization: "Multiple Academic & Professional Programs",
    description:
      "Strengthened expertise in Software Engineering, Web Technologies, Cloud Concepts, AI Basics, and modern development practices.",
  },
];


const RightListIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    id="Bold"
    enableBackground="new 0 0 24 24"
    height="512"
    viewBox="0 0 24 24"
    width="512"
    className="svg replaced-svg"
  >
    <path d="m12 0c-6.615 0-12 5.381-12 12 0 6.615 5.385 12 12 12s12-5.385 12-12c0-6.62-5.385-12-12-12zm-10.79 11.999c0-1.563.333-3.048.934-4.389l5.148 14.1c-3.601-1.751-6.082-5.442-6.082-9.711zm10.79 10.791c-1.06 0-2.081-.155-3.048-.441l3.237-9.406 3.315 9.087c.024.054.049.101.077.15-1.118.392-2.323.61-3.581.61zm1.485-15.845v-.001c.648-.034 1.233-.101 1.233-.101.581-.068.513-.924-.068-.891 0 0-1.747.135-2.874.135-1.06 0-2.841-.135-2.841-.135-.58-.034-.647.857-.067.891 0 0 .551.068 1.132.101l1.679 4.606-2.361 7.079-3.928-11.685c.649-.034 1.234-.101 1.234-.101.581-.068.513-.924-.068-.891 0 0-1.747.135-2.874.135-.203 0-.441-.005-.697-.014 1.931-2.928 5.245-4.863 9.015-4.863 2.807 0 5.366 1.075 7.287 2.83-.049-.005-.092-.009-.14-.009-1.06 0-1.81.924-1.81 1.916 0 .89.513 1.64 1.06 2.531.411.716.891 1.64.891 2.976 0 .924-.353 1.993-.823 3.489l-1.075 3.595zm7.985-.122c.842 1.539 1.321 3.3 1.321 5.178 0 3.982-2.158 7.456-5.366 9.324l-.001-.001 3.295-9.528c.614-1.539.823-2.767.823-3.866 0-.396-.024-.764-.072-1.107z" />
  </svg>
);

const SectionHeaderItem = ({ title }) => (
  <li className="wow fadeInUp" data-wow-duration=".7s">
    <div className="list_inner" style={{ backgroundColor: "transparent" }}>
      <div className="title">
        <span style={{ fontWeight: 700 }}>{title}</span>
      </div>
      <div className="cost">
        <span />
      </div>
      <RightListIcon />
    </div>
  </li>
);

const Price = () => {
  const [activeSection, setActiveSection] = useState("Achievements");
  const achievementsSentinelRef = useRef(null);
  const certificationsSentinelRef = useRef(null);

  useEffect(() => {
    const achievementsEl = achievementsSentinelRef.current;
    const certificationsEl = certificationsSentinelRef.current;

    if (!achievementsEl || !certificationsEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        const top = visible[0];
        if (!top) return;

        const section = top.target.getAttribute("data-section");
        if (section === "achievements") setActiveSection("Achievements");
        if (section === "certifications") setActiveSection("Certifications");
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-30% 0px -60% 0px",
      }
    );

    observer.observe(achievementsEl);
    observer.observe(certificationsEl);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="kura_tm_section" id="price">
      <div className="kura_tm_pricing">
        <div className="container">
          <div className="pricing_inner">
            <div className="left">
              <div className="kura_tm_sticky_section">
                <div className="kura_tm_main_title">
                  {/* <span>Pricing</span> */}
                  <h3 className="text-4xl sm:text-5xl lg:text-6xl font-oswald">{activeSection}</h3>
                </div>
                {/* <div className="text">
                  <p>
                    For more than 20 years our experts have been accomplishing
                    enough with modern Web Development, new generation web and
                    app programming language.
                  </p>
                </div> */}
              </div>
            </div>
            <div className="right">
              <div className="kura_tm_sticky_section">
                <ul>
                  <li aria-hidden="true" style={{ height: 1, overflow: "hidden" }}>
                    <span ref={achievementsSentinelRef} data-section="achievements" />
                  </li>
                  <SectionHeaderItem title="Achievements" />
                  {achievements.map((item, i) => (
                    <li
                      key={`achievement-${item.title}-${i}`}
                      className="wow fadeInUp"
                      data-wow-duration=".7s"
                      data-wow-delay={`${i * 0.2}s`}
                    >
                      <div className="list_inner">
                        <div className="title">
                          <span>
                            {item.icon} {item.title}
                          </span>
                        </div>
                        <div className="cost">
                          <span>{item.description}</span>
                        </div>
                        <RightListIcon />
                      </div>
                    </li>
                  ))}
                  <li aria-hidden="true" style={{ height: 1, overflow: "hidden" }}>
                    <span
                      ref={certificationsSentinelRef}
                      data-section="certifications"
                    />
                  </li>
                  <SectionHeaderItem title="Certifications" />
                  {certifications.map((item, i) => (
                    <li
                      key={`certification-${item.title}-${i}`}
                      className="wow fadeInUp"
                      data-wow-duration=".7s"
                      data-wow-delay={`${(achievements.length + i) * 0.2}s`}
                    >
                      <div className="list_inner">
                        <div className="title">
                          <span>
                            {item.icon} {item.title}
                          </span>
                        </div>
                        <div className="cost">
                          <span>{item.organization}</span>
                        </div>
                        <RightListIcon />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
