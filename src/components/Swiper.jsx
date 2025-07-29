import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Projects from "./Projects";
import "swiper/css";
import "swiper/css/pagination";
import "./swiperCustom.css";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1.2}
      grabCursor={true}
      modules={[Autoplay, Pagination]}
      pagination={true}
      loop={true}
      // autoplay={{
      //   delay: 3500,
      //   disableOnInteraction: false,
      //   pauseOnMouseEnter: true,
      // }}
      speed={800}
      breakpoints={{
        768: { slidesPerView: 1.2 },
        1024: { slidesPerView: 2.2 },
      }}
      className="select-none pb-10"
    >
      {Projects.map((project, index) => (
        <SwiperSlide key={index}>
          <div className="p-[15px] flex justify-between items-start flex-col rounded-2xl bg-white gap-3 shadow-md hover:shadow-xl transition-shadow duration-300">
            <a
              href={project.link}
              target="_blank"
              className="w-full h-full overflow-hidden rounded-2xl"
              rel="noopener noreferrer"
            >
              <div className="hidden">
                https://accounts.google.com/o/oauth2/v2/auth?prompt=select_account&state=E05BU60OCyXfNeLiAWYTti8AvMUizMQ5&redirect_uri=https%3A%2F%2Fsdk-os.mpsdk.easebar.com%2Fapi%2Fusers%2Flogin%2Fv2%2Fgoogle%2Fcallback&response_type=code&client_id=529895160150-2tlh8ntrjne89ecl4aqt2mbgkpfal7sg.apps.googleusercontent.com&scope=profile
              </div>
              <img
                src={project.image}
                alt={project.alt}
                loading="lazy"
                className="w-full h-full object-cover rounded-xl hover:scale-[1.1] transition-all duration-300"
                draggable={false}
              />
            </a>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black font-semibold hover:text-[#00ff5e] transition-all duration-300 poppins-semibold text-lg"
            >
              {project.name}
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
