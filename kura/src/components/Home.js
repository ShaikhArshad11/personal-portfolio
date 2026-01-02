import { useState } from "react";
import { HomeModal } from "./ContentModal";
import { FiLinkedin } from "react-icons/fi";
import { VscGithubInverted } from "react-icons/vsc";
import { PiReadCvLogo } from "react-icons/pi";

const Home = () => {
  const [open, setOpen] = useState(false);
  const [modalValue, setModalValue] = useState({
    img: null,
    title: "",
  });
  const onOpenModal = (img, title) => {
    setOpen(true);
    setModalValue({ img, title });
  };
  const onCloseModal = () => {
    setOpen(false);
    setModalValue({ img: null, title: "" });
  };
  return (
    <div className="kura_tm_section" id="home">

      <div className="kura_tm_hero">
        <div className="container">
          <div className="text-[80px] sm:text-[80px] md:text-[120px] lg:text-[180px] leading-none font-medium mt-10 sm:mt-16 lg:mt-20 font-oswald mb-5 sm:mb-0">
            ARSHAD SHAIKH
          </div>
          <div className="content">
            <div className="left">
              {/* <span className="text-7xl">ARSHAD SHAIKH</span> */}
              <h3 className="job">Software Developer & Freelancer</h3>

              <div className="flex gap-16 mt-20">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/arshad-shaikh-502721205"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <FiLinkedin className="w-12 h-12 text-gray-700 group-hover:text-blue-600 transition-all duration-300 group-hover:scale-150 relative z-10" />
                    LinkedIn
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/ShaikhArshad11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gray-800 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <VscGithubInverted className="w-12 h-12 text-gray-700 group-hover:text-gray-900 transition-all duration-300 group-hover:scale-150 relative z-10" />
                    Github
                  </div>
                </a>

                {/* Resume */}
                <a
                  href="https://drive.google.com/file/d/1ZoDFOQX3H3AEbrLaMw4-LxfnJIYMIlFY/view?usp=drivesdk&usp=embed_facebook&usp=embed_facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-500 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                    <PiReadCvLogo className="w-12 h-12 text-gray-700 group-hover:text-green-600 transition-all duration-300 group-hover:scale-150 relative z-10" />
                    Resume
                  </div>
                </a>
              </div>
            </div>
            <div className="right">
              <div className="image">
                <img src="/img/thumbs/3-4.jpg" alt="" />
                <div
                  className="main"
                  style={{ backgroundImage: "url(img/hero/me.png)" }}
                ></div>
                <div className="shape"></div>
              </div>
            </div>
            <div className="down anchor">
              <a href="#portfolio">
                <img className="svg" src="/img/svg/down-arrow.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <HomeModal
        open={open}
        onCloseModal={() => onCloseModal()}
        img={modalValue.img}
        title={modalValue.title}
      />
    </div>
  );
};

export default Home;
