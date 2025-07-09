const MyWork = () => {
  return (
    <section className="flex flex-col justify-start items-start gap-[30px] mb-10 mr-10">
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
      <div className="max-w-[700px] w-full h-auto text-white py-18 px-8 bg-[#0f0f0f85] rounded-xl border border-[#00ff5e66] backdrop-blur-md flex justify-start items-start flex-col gap-6">
        <div className="flex justify-start items-start gap-5">
          <h1 className="text-center border border-[#00ff5e99] bg-[#0f0f0fb7] py-[25px] px-[35px] rounded-[10px] shadow-[0_0_10px_#00ff5e55] transition-all duration-300 hover:shadow-[2px_2px_5px_0px_#00ff5e] hover:scale-[1.01] cursor-pointer active:scale-[0.9] text-[14px] text-[#00ff5e] poppins-medium">
            Front-End Projects
          </h1>
        </div>
      </div>
    </section>
  );
};

export default MyWork;
