import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({
  data
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  useEffect(() => {
    let raf = 0;

    const compute = () => {
      const el = containerRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || 0;
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const elTop = rect.top + scrollY;
      const elHeight = rect.height;

      const start = elTop - viewportH * 0.1;
      const end = elTop + elHeight - viewportH * 0.5;
      const raw = (scrollY - start) / Math.max(1, end - start);
      const clamped = Math.min(1, Math.max(0, raw));
      setProgress(clamped);
    };

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const heightTransform = progress * height;
  const opacityTransform = Math.min(1, progress / 0.1);

  return (
    <div
      className="w-full bg-gray-100 font-sans md:px-10"
      ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-6xl mb-4 text-black max-w-4xl">
          My Professional Journey
        </h2>
        
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div
                  className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3
                className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3
                className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <div
            style={{
              height: heightTransform + "px",
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>
  );
};


// import React, { useEffect, useRef, useState } from "react";

// export const Timeline = ({ education = [], experience = [] }) => {
//   const ref = useRef(null);
//   const containerRef = useRef(null);
//   const [height, setHeight] = useState(0);
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     if (ref.current) {
//       const rect = ref.current.getBoundingClientRect();
//       setHeight(rect.height);
//     }
//   }, [ref]);

//   useEffect(() => {
//     let raf = 0;

//     const compute = () => {
//       const el = containerRef.current;
//       if (!el) return;

//       const rect = el.getBoundingClientRect();
//       const viewportH = window.innerHeight || 0;
//       const scrollY = window.scrollY || window.pageYOffset || 0;
//       const elTop = rect.top + scrollY;
//       const elHeight = rect.height;

//       const start = elTop - viewportH * 0.1;
//       const end = elTop + elHeight - viewportH * 0.5;
//       const raw = (scrollY - start) / Math.max(1, end - start);
//       const clamped = Math.min(1, Math.max(0, raw));
//       setProgress(clamped);
//     };

//     const onScroll = () => {
//       if (raf) cancelAnimationFrame(raf);
//       raf = requestAnimationFrame(compute);
//     };

//     compute();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     window.addEventListener("resize", onScroll);

//     return () => {
//       if (raf) cancelAnimationFrame(raf);
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onScroll);
//     };
//   }, []);

//   const heightTransform = progress * height;
//   const opacityTransform = Math.min(1, progress / 0.1);

//   return (
//     <div
//       className="w-full bg-gray-100 font-sans md:px-10"
//       ref={containerRef}
//     >
//       <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
//         <h2 className="text-lg md:text-6xl mb-4 text-black max-w-4xl">
//           My Professional Journey
//         </h2>
//       </div>

//       <div ref={ref} className="relative max-w-7xl mx-auto pb-20 grid grid-cols-1 md:grid-cols-3 gap-10">

//         {/* LEFT SIDE - EDUCATION */}
//         <div className="relative">
//           {education.map((item, index) => (
//             <div key={index} className="mb-20">
//               <h3 className="text-xl md:text-3xl font-bold text-neutral-600">
//                 {item.title}
//               </h3>
//               <div className="mt-4 text-neutral-700">
//                 {item.content}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CENTER TIMELINE LINE */}
//         <div className="relative flex justify-center">
//           <div
//             style={{ height: height + "px" }}
//             className="absolute w-[3px] bg-neutral-300 rounded-full"
//           />

//           <div
//             style={{
//               height: heightTransform + "px",
//               opacity: opacityTransform,
//             }}
//             className="absolute w-[3px] bg-gradient-to-b from-blue-500 via-purple-500 to-transparent rounded-full"
//           />
//         </div>

//         {/* RIGHT SIDE - EXPERIENCE */}
//         <div className="relative">
//           {experience.map((item, index) => (
//             <div key={index} className="mb-20">
//               <h3 className="text-xl md:text-3xl font-bold text-neutral-600">
//                 {item.title}
//               </h3>
//               <div className="mt-4 text-neutral-700">
//                 {item.content}
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };
