const AboutMe = () => {
  return (
    <section className="flex flex-col justify-start items-start gap-[30px] mb-10 mr-10">
      <div className="max-w-[700px] w-full h-auto text-white py-18 px-8 bg-[#0f0f0f85] rounded-xl border border-[#00ff5e66] backdrop-blur-md">
        <h1 className="merienda text-4xl text-[#00ff5e] mb-5 afterLine">
          About Me
        </h1>
        <p className="poppins text-md text-gray-300 leading-relaxed">
          Hey there! I'm{" "}
          <span className="text-[#00ff5e] font-medium">M. Taha Khan</span> – a
          passionate front-end web developer from the bustling city of Karachi!
          With a knack for crafting interactive and engaging web experiences, I
          bring your ideas to life using clean HTML, sleek CSS, and dynamic
          JavaScript.
          <br />
          <br />
          I’ve also got hands-on experience with{" "}
          <span className="text-[#00ff5e] font-medium">WordPress</span> and{" "}
          <span className="text-[#00ff5e] font-medium">PHP</span>, building
          powerful websites that are both user-friendly and visually striking.
          Right now, I’m diving deep into{" "}
          <span className="text-[#00ff5e] font-medium">React.js</span>,
          sharpening my skills in modern JavaScript frameworks, with{" "}
          <span className="text-[#00ff5e] font-medium">Next.js</span> on my
          radar next.
          <br />
          <br />
          I’ve recently begun exploring{" "}
          <span className="text-[#00ff5e] font-medium">
            Discord bot development
          </span>{" "}
          using <span className="text-[#00ff5e] font-medium">Discord.js</span>,
          expanding my capabilities in building interactive tools for online
          communities.
          <br />
          <br />
          Whether it’s a custom-coded solution, a slick WordPress site, or even
          a Discord bot, I’m your friendly neighborhood developer, ready to make
          your vision a reality.{" "}
          <span className="text-[#00ff5e]">
            Let's build something awesome together! 🚀
          </span>
        </p>
      </div>

      <div className="max-w-[700px] w-full h-auto text-white py-18 px-8 bg-[#0f0f0f85] rounded-xl border border-[#00ff5e66] backdrop-blur-md">
        <h1 className="merienda text-4xl text-[#00ff5e] mb-5 afterLine">
          What I Do!
        </h1>
        {/* Cards */}

        <div className="flex justify-center items-center gap-5 mt-[50px]">
          {/* Web Development */}
          <div
            className="flex flex-col justify-start items-center gap-3 px-5 py-9 w-[320px] h-[260px] border border-[#00ff5e66] rounded-2xl bg-[#0f0f0fb7]"
            id="webDevCard"
          >
            <div className="flex justify-center items-center bg-[#053a00ff] p-3 webDev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="#00ff5e"
              >
                <path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path>
              </svg>
            </div>
            <h6 className="roboto-slab text-[20px] text-center text-[#00ff5e]">
              Web Development
            </h6>
            <p className="poppins text-sm text-gray-300 text-center">
              Crafting sleek, responsive websites with modern tools and clean
              code.
            </p>
          </div>
          {/* Managing Discord Servers */}
          <div
            className="flex flex-col justify-start items-center gap-3 px-5 py-9 w-[320px] h-[260px] border border-[#00ff5e66] rounded-2xl bg-[#0f0f0fb7]"
            id="manageDiscordCard"
          >
            <div className="flex justify-center items-center bg-[#053a00ff] p-3 manageDiscord">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="#00ff5e"
              >
                <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"></path>
              </svg>
            </div>
            <h6 className="roboto-slab text-[20px] text-center text-[#00ff5e]">
              Discord Bot Development
            </h6>
            <p className="poppins text-sm text-gray-300 text-center ">
              Creating custom Discord bots with Discord.js to automate tasks and
              boost server activity.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 mt-[20px]">
          {/* Image Editing */}
          <div
            className="flex flex-col justify-start items-center gap-3 px-5 py-9 w-[320px] h-[260px] border border-[#00ff5e66] rounded-2xl bg-[#0f0f0fb7]"
            id="imageEditingCard"
          >
            <div className="flex justify-center items-center bg-[#053a00ff] p-3 imageEditing">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="30"
                height="30"
                fill="#00ff5e"
              >
                <path d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM5 19V5h14l.002 14H5z"></path>
                <path d="m10 14-1-1-3 4h12l-5-7z"></path>
              </svg>
            </div>
            <h6 className="roboto-slab text-[20px] text-center text-[#00ff5e]">
              Image Editing
            </h6>
            <p className="poppins text-sm text-gray-300 text-center ">
              While image editing isn't my primary focus, I occasionally dive
              into it when needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
