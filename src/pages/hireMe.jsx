const HireMe = () => {
  return (
    <section className="flex flex-col justify-start items-start gap-[30px] mb-10 mr-10 select-none">
      <div className="max-w-[700px] w-full h-auto text-white py-18 px-8 bg-[#0f0f0f85] rounded-xl border border-[#00ff5e66] backdrop-blur-md flex justify-start items-start flex-col gap-6">
        <h1 className="merienda text-4xl text-[#00ff5e] mb-5 afterLine w-[max-content]">
          Hire me
        </h1>
        <form
          action=""
          method="post"
          className="border border-[#00ff5e66] w-full "
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="poppins text-md font-medium bg-transparent border border-[#00000066] rounded-md p-2 outline-none w-full"
          />
        </form>
      </div>
    </section>
  );
};

export default HireMe;
