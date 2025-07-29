import Slider from "../components/Swiper";
const MyWork = () => {
  return (
    <section className="flex flex-col justify-start items-start gap-[30px] w-[max-content] mb-10 mr-10 select-none">
      <div className="max-w-[700px] w-full h-auto text-white py-18 px-8 bg-[#0f0f0f85] rounded-xl border border-[#00ff5e66] backdrop-blur-md flex justify-start items-start flex-col gap-6">
        <h1 className="merienda text-4xl text-[#00ff5e] mb-5 afterLine w-[max-content]">
          Portfolio
        </h1>
        <p className="poppins text-md text-gray-300 leading-relaxed">
          I specialize in building dynamic, responsive, and visually engaging
          websites. My focus is on front-end development using{" "}
          <span className="text-[#00ff5e] font-medium">HTML</span>,{" "}
          <span className="text-[#00ff5e] font-medium">CSS</span>, and{" "}
          <span className="text-[#00ff5e] font-medium">JavaScript</span>, along
          with <span className="text-[#00ff5e] font-medium">WordPress</span> for
          creating custom layouts, themes, and user-friendly interfaces.
          <br />
          <br />
          I’m currently learning{" "}
          <span className="text-[#00ff5e] font-medium">React.js</span> and
          building up real-world experience with it. Once I feel confident, I
          plan to transition into{" "}
          <span className="text-[#00ff5e] font-medium">Next.js</span> to expand
          my capabilities in full-stack and server-side rendering.
          <br />
          <br />
          I’m also exploring{" "}
          <span className="text-[#00ff5e] font-medium">
            Discord bot development
          </span>{" "}
          using <span className="text-[#00ff5e] font-medium">Discord.js</span>{" "}
          out of curiosity and personal interest, aiming to build fun and
          interactive tools for online communities down the line.
          <br />
          <br />
          Below, you'll find a collection of projects that showcase my growth,
          creativity, and passion for front-end web development.
        </p>
      </div>
      <div className="max-w-[700px] w-full h-auto text-white pt-18 pb-3 px-8 bg-[#0f0f0f85] rounded-xl border border-[#00ff5e66] backdrop-blur-md flex justify-start items-start flex-col gap-6">
        <div className="flex justify-start items-start gap-5 w-full flex-col">
          <div className="w-full flex justify-center items-center text-center">
            <h1 className="merienda text-4xl text-[#00ff5e] mb-5 ">
              Projects I have worked on!
            </h1>
            {/* Modern Projects display slider, scrollable on larger screens swipeable on mobile */}
          </div>
        </div>
        <div className="w-full max-w-[700px] mx-auto overflow-hidden">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default MyWork;
