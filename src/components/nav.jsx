import { Link } from "react-router-dom";
import { User } from "../assets/icons/User";
import { Atom } from "../assets/icons/Atom";
import { Rocket } from "../assets/icons/Rocket";
import { FileStack } from "../assets/icons/FileStack";

const Nav = () => (
  <nav className="w-[max-content] h-full left-[1%] fixed flex items-center justify-center top-[10]">
    <ul className="flex flex-col justify-center items-center gap-4 mb-[150px]">
      <li className="relative flex items-center justify-center bg-gradient-to-br from-[#009b39] to-[#0d4221] rounded-md backdrop-filter backdrop-blur-md group h-[50px] w-[50px] transition-all duration-[0.3s] hover:scale-[1.07] active:duration-[0.2s] hover:shadow-[2px_2px_5px_0px_#00ff5e] active:scale-[0.95]">
        <Link to="/aboutMe">
          <User />
          <span className="absolute left-[60px] top-0 h-full w-[100px] whitespace-nowrap flex items-center justify-center text-white px-3 rounded-md bg-gradient-to-br from-[#009b39] to-[#0d4221] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
            About me
          </span>
        </Link>
      </li>

      <li className="relative flex items-center justify-center bg-gradient-to-br from-[#009b39] to-[#0d4221] rounded-md backdrop-filter backdrop-blur-md group h-[50px] w-[50px] transition-all duration-[0.3s] hover:scale-[1.07] active:duration-[0.2s] hover:shadow-[2px_2px_5px_0px_#00ff5e] active:scale-[0.95]">
        <Link to="/myResume">
          <FileStack />
          <span className="absolute left-[60px] top-0 h-full w-[100px] whitespace-nowrap flex items-center justify-center text-white px-3 rounded-md bg-gradient-to-br from-[#009b39] to-[#0d4221] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
            My Resume
          </span>
        </Link>
      </li>

      <li className="relative flex items-center justify-center bg-gradient-to-br from-[#009b39] to-[#0d4221] rounded-md backdrop-filter backdrop-blur-md group h-[50px] w-[50px] transition-all duration-[0.3s] hover:scale-[1.07] active:duration-[0.2s] hover:shadow-[2px_2px_5px_0px_#00ff5e] active:scale-[0.95]">
        <Link to="/myWork">
          <Atom />
          <span className="absolute left-[60px] top-0 h-full w-[100px] whitespace-nowrap flex items-center justify-center text-white px-3 rounded-md bg-gradient-to-br from-[#009b39] to-[#0d4221] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
            My Work
          </span>
        </Link>
      </li>

      <li className="relative flex items-center justify-center bg-gradient-to-br from-[#009b39] to-[#0d4221] rounded-md backdrop-filter backdrop-blur-md group h-[50px] w-[50px] transition-all duration-[0.3s] hover:scale-[1.07] active:duration-[0.2s] hover:shadow-[2px_2px_5px_0px_#00ff5e] active:scale-[0.95]">
        <Link to="/hireMe">
          <Rocket />
          <span className="absolute left-[60px] top-0 h-full w-[100px] whitespace-nowrap flex items-center justify-center text-white px-3 rounded-md bg-gradient-to-br from-[#009b39] to-[#0d4221] opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
            Hire Me
          </span>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
