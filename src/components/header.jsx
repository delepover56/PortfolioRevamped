import { Link } from "react-router-dom";

const Header = () => (
  <header className="flex items-center justify-center w-full py-[20px] sticky top-[0]">
    <Link
      to="/"
      className="flex justify-center items-center gap-[10px] text-[3.5vw] font-extrabold text-[#009b39] group"
      id="logo"
    >
      {["T", "a", "h", "a", " ", "K", "h", "a", "n"].map((char, index) => (
        <span
          key={index}
          className={`transition-all duration-300 animate-[waveAnimation_3s_ease-in-out_infinite] text-shadow-[3px_3px_5px_rgba(0,0,0,0.3)]  group-hover:text-white group-hover:text-shadow-none`}
          style={{ animationDelay: `calc(0.1s * ${index + 1})` }}
        >
          {char}
        </span>
      ))}
    </Link>
  </header>
);

export default Header;
