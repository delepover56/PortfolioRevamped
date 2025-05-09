import { User } from "../assets/icons/User";
import { Atom } from "../assets/icons/Atom";
import { Rocket } from "../assets/icons/Rocket";
import { FileStack } from "../assets/icons/FileStack";

const Nav = () => (
  <div className="w-[max-content] h-full left-[1%] sticky flex items-center justify-center">
    <ul className="flex flex-col justify-center items-center gap-4 mb-[150px] ">
      <li className="relative flex items-center justify-center bg-gradient-to-br from-[#009b39] to-[#0d4221] rounded-md backdrop-filter backdrop-blur-md group h-[50px] w-[50px]">
        <User />
        <span className="absolute left-[60px] h-full w-[100px] whitespace-nowrap flex items-center justify-center text-white px-3 rounded-md bg-gradient-to-br from-[#009b39] to-[#0d4221] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
          About me
        </span>
      </li>

      <li className="relative flex items-center justify-center bg-gradient-to-br from-[#009b39] to-[#0d4221] rounded-md backdrop-filter backdrop-blur-md group h-[50px] w-[50px]">
        <FileStack />
        <span className="absolute left-[60px] h-full w-[100px] whitespace-nowrap flex items-center justify-center text-white px-3 rounded-md bg-gradient-to-br from-[#009b39] to-[#0d4221] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
          My Resume
        </span>
      </li>

      <li className="relative flex items-center justify-center bg-gradient-to-br from-[#009b39] to-[#0d4221] rounded-md backdrop-filter backdrop-blur-md group h-[50px] w-[50px]">
        <Atom />
        <span className="absolute left-[60px] h-full w-[100px] whitespace-nowrap flex items-center justify-center text-white px-3 rounded-md bg-gradient-to-br from-[#009b39] to-[#0d4221] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
          My Work
        </span>
      </li>

      <li className="relative flex items-center justify-center bg-gradient-to-br from-[#009b39] to-[#0d4221] rounded-md backdrop-filter backdrop-blur-md group h-[50px] w-[50px]">
        <Rocket />
        <span className="absolute left-[60px] h-full w-[100px] whitespace-nowrap flex items-center justify-center text-white px-3 rounded-md bg-gradient-to-br from-[#009b39] to-[#0d4221] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
          Hire Me
        </span>
      </li>
    </ul>
  </div>
);

export default Nav;
