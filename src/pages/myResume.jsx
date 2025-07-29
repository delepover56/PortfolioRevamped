import SkillCard from "../components/SkillCard";

const Resume = () => {
  // State to store the current counter value

  return (
    <section className="flex flex-col justify-start items-start w-[max-content] gap-[30px] mb-10 mr-10 select-none">
      <div className="max-w-[700px] w-full h-auto text-white py-18 px-8 bg-[#0f0f0f85] rounded-xl border border-[#00ff5e66] backdrop-blur-md flex justify-start items-start flex-col gap-6 ">
        <h1 className="merienda text-4xl text-[#00ff5e] mb-5 afterLine w-[max-content]">
          My Resume
        </h1>
        <div className="flex justify-start items-start min-w-full gap-10">
          <div className="education flex flex-col gap-4">
            <div className="flex justify-start items-center gap-5">
              <span className="flex justify-center items-center bg-[#053a00ff] p-2 rounded-4xl shadow-[1px_2px_4px_0px_#00ff5e]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="#00ff5e"
                >
                  <path d="M21 10h-2V4h1V2H4v2h1v6H3a1 1 0 0 0-1 1v9h20v-9a1 1 0 0 0-1-1zm-7 8v-4h-4v4H7V4h10v14h-3z"></path>
                  <path d="M9 6h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2z"></path>
                </svg>
              </span>
              <h4 className="text-xl text-[#00ff5e] roboto-slab hover:text-white transition-all duration-300 hover:cursor-default">
                Education
              </h4>
            </div>
            <div className="max-w-100 w-70 max-h-40 h-40 flex justify-center items-start gap-3 flex-col border border-[#00ff5e66] rounded-2xl bg-[#0f0f0fb7] p-5 mt-8 hover:transform hover:scale-102 transition-all duration-300 hover:shadow-[1px_2px_4px_0px_#00ff5e]">
              <p className="text-gray-300 poppins-medium text-sm">
                2023 – 2025
              </p>
              <h2 className="text-[#00ff5e] roboto-slab text-md">
                Diploma In Web Development
              </h2>
              <p className="text-gray-300 poppins-medium text-sm">
                ApTech Metro, Star Gate
              </p>
            </div>
            <div className="max-w-100 w-70 max-h-40 h-40 flex justify-center items-start gap-3 flex-col border border-[#00ff5e66] rounded-2xl bg-[#0f0f0fb7] p-5 hover:transform hover:scale-102 transition-all duration-300 hover:shadow-[1px_2px_4px_0px_#00ff5e]">
              <p className="text-gray-300 poppins-medium text-sm">
                2025 – Present
              </p>
              <h2 className="text-[#00ff5e] roboto-slab text-md">
                Intermediate
              </h2>
              <p className="text-gray-300 poppins-medium text-sm">
                ApTech Metro, Star Gate
              </p>
            </div>
          </div>
          <div className="experience flex flex-col gap-4">
            <div className="flex justify-start items-center gap-5">
              <span className="flex justify-center items-center bg-[#053a00ff] p-2 rounded-4xl shadow-[1px_2px_4px_0px_#00ff5e]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="#00ff5e"
                >
                  <path d="m20.895 7.553-2-4A1.001 1.001 0 0 0 18 3h-5c-.379 0-.725.214-.895.553L10.382 7H6c-.379 0-.725.214-.895.553l-2 4a1 1 0 0 0 0 .895l2 4c.17.338.516.552.895.552h4.382l1.724 3.447A.998.998 0 0 0 13 21h5c.379 0 .725-.214.895-.553l2-4a1 1 0 0 0 0-.895L19.118 12l1.776-3.553a1 1 0 0 0 .001-.894zM13.618 5h3.764l1.5 3-1.5 3h-3.764l-1.5-3 1.5-3zm-8.5 7 1.5-3h3.764l1.5 3-1.5 3H6.618l-1.5-3zm12.264 7h-3.764l-1.5-3 1.5-3h3.764l1.5 3-1.5 3z"></path>
                </svg>
              </span>
              <h4 className="text-xl text-[#00ff5e] roboto-slab hover:text-white transition-all duration-300 hover:cursor-default">
                Experience
              </h4>
            </div>
            <div className="max-w-100 w-70 max-h-40 h-40 flex justify-center items-start gap-3 flex-col border border-[#00ff5e66] rounded-2xl bg-[#0f0f0fb7] p-5 mt-8 hover:transform hover:scale-102 transition-all duration-300 hover:shadow-[1px_2px_4px_0px_#00ff5e]">
              <p className="text-gray-300 poppins-medium text-sm">3 Years</p>
              <h2 className="text-[#00ff5e] roboto-slab text-md">
                Front-End Development
              </h2>
              <p className="text-gray-300 poppins-medium text-sm">
                HTML, CSS, JS, React.Js, & WordPress
              </p>
            </div>
            <div className="max-w-100 w-70 max-h-40 h-40 flex justify-center items-start gap-3 flex-col border border-[#00ff5e66] rounded-2xl bg-[#0f0f0fb7] p-5 hover:transform hover:scale-102 transition-all duration-300 hover:shadow-[1px_2px_4px_0px_#00ff5e]">
              <p className="text-gray-300 poppins-medium text-sm">1 Year</p>
              <h2 className="text-[#00ff5e] roboto-slab text-md">
                Back-End Development
              </h2>
              <p className="text-gray-300 poppins-medium text-sm">
                PHP, & MySQL
              </p>
            </div>
          </div>
        </div>
        <hr className="w-full h-[1px] my-8 text-[#00ff5e]" />
        <div className="flex justify-start items-start min-w-full gap-10">
          <div className="developmentSkills flex flex-col gap-4">
            <div className="flex justify-start items-center gap-5">
              <span className="flex justify-center items-center bg-[#053a00ff] p-2 rounded-4xl shadow-[1px_2px_4px_0px_#00ff5e]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="#00ff5e"
                >
                  <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
                </svg>
              </span>
              <h4 className="text-xl text-[#00ff5e] roboto-slab hover:text-white transition-all duration-300 hover:cursor-default">
                Development Skills
              </h4>
            </div>
            <SkillCard title="Front-End Development" percentage={85} />
            <SkillCard title="Back-End Development" percentage={40} />
          </div>
          <div className="knowledge flex flex-col gap-4">
            <div className="flex justify-start items-center gap-5 mb-8">
              <span className="flex justify-center items-center bg-[#053a00ff] p-2 rounded-4xl shadow-[1px_2px_4px_0px_#00ff5e]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="#00ff5e"
                >
                  <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
                </svg>
              </span>
              <h4 className="text-xl text-[#00ff5e] roboto-slab hover:text-white transition-all duration-300 hover:cursor-default">
                Knowledge
              </h4>
            </div>
            <div className="flex justify-start items-start gap-5 flex-wrap">
              {/* HTML */}
              <div className="flex justify-center items-center border border-[#00ff5e99] bg-[#0f0f0fb7]  py-[25px] px-[35px] rounded-[10px] shadow-[0_0_10px_#00ff5e55] transition-all duration-300 hover:shadow-[2px_2px_5px_0px_#00ff5e] hover:scale-[1.01] cursor-pointer active:scale-[0.9] w-[120px] h-[40px] ">
                <h6 className="text-[14px] text-[#00ff5e] poppins">HTML</h6>
              </div>
              {/* CSS */}
              <div className="flex justify-center items-center border border-[#00ff5e99] bg-[#0f0f0fb7]  py-[25px] px-[35px] rounded-[10px] shadow-[0_0_10px_#00ff5e55] transition-all duration-300 hover:shadow-[2px_2px_5px_0px_#00ff5e] hover:scale-[1.01] cursor-pointer active:scale-[0.9] w-[120px] h-[40px] ">
                <h6 className="text-[14px] text-[#00ff5e] poppins">CSS</h6>
              </div>
              {/* JavaScript */}
              <div className="flex justify-center items-center border border-[#00ff5e99] bg-[#0f0f0fb7]  py-[25px] px-[35px] rounded-[10px] shadow-[0_0_10px_#00ff5e55] transition-all duration-300 hover:shadow-[2px_2px_5px_0px_#00ff5e] hover:scale-[1.01] cursor-pointer active:scale-[0.9] w-[120px] h-[40px] ">
                <h6 className="text-[14px] text-[#00ff5e] poppins">
                  JavaScript
                </h6>
              </div>
              {/* React */}
              <div className="flex justify-center items-center border border-[#00ff5e99] bg-[#0f0f0fb7]  py-[25px] px-[35px] rounded-[10px] shadow-[0_0_10px_#00ff5e55] transition-all duration-300 hover:shadow-[2px_2px_5px_0px_#00ff5e] hover:scale-[1.01] cursor-pointer active:scale-[0.9] w-[120px] h-[40px] ">
                <h6 className="text-[14px] text-[#00ff5e] poppins">React.Js</h6>
              </div>
              {/* Tailwind */}
              <div className="flex justify-center items-center border border-[#00ff5e99] bg-[#0f0f0fb7]  py-[25px] px-[35px] rounded-[10px] shadow-[0_0_10px_#00ff5e55] transition-all duration-300 hover:shadow-[2px_2px_5px_0px_#00ff5e] hover:scale-[1.01] cursor-pointer active:scale-[0.9] w-[120px] h-[40px] ">
                <h6 className="text-[14px] text-[#00ff5e] poppins">Tailwind</h6>
              </div>
              {/* Discord.Js */}
              <div className="flex justify-center items-center border border-[#00ff5e99] bg-[#0f0f0fb7]  py-[25px] px-[35px] rounded-[10px] shadow-[0_0_10px_#00ff5e55] transition-all duration-300 hover:shadow-[2px_2px_5px_0px_#00ff5e] hover:scale-[1.01] cursor-pointer active:scale-[0.9] w-[120px] h-[40px] ">
                <h6 className="text-[14px] text-[#00ff5e] poppins">
                  Discord.Js
                </h6>
              </div>
              {/* WordPress */}
              <div className="flex justify-center items-center border border-[#00ff5e99] bg-[#0f0f0fb7]  py-[25px] px-[35px] rounded-[10px] shadow-[0_0_10px_#00ff5e55] transition-all duration-300 hover:shadow-[2px_2px_5px_0px_#00ff5e] hover:scale-[1.01] cursor-pointer active:scale-[0.9] w-[120px] h-[40px] ">
                <h6 className="text-[14px] text-[#00ff5e] poppins">
                  WordPress
                </h6>
              </div>
              {/* PHP */}
              <div className="flex justify-center items-center border border-[#00ff5e99] bg-[#0f0f0fb7]  py-[25px] px-[35px] rounded-[10px] shadow-[0_0_10px_#00ff5e55] transition-all duration-300 hover:shadow-[2px_2px_5px_0px_#00ff5e] hover:scale-[1.01] cursor-pointer active:scale-[0.9] w-[120px] h-[40px] ">
                <h6 className="text-[14px] text-[#00ff5e] poppins">PHP</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
