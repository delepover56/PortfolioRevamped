import Nav from "./components/nav";
import BackgroundVideo from "./components/backgroundVideo";
import Header from "./components/header";
import MyInfo from "./components/myInfo";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="w-full min-h-screen relative">
      <BackgroundVideo className="absolute top-0 left-0 w-full h-full" />
      <Header /> {/* Header stays sticky */}
      <Nav />
      <div className="flex ml-[14%] min-h-screen justify-start items-start gap-[5%] border-1 border-red-500">
        <MyInfo />
        {/* This is where the routed components will be displayed */}

        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default App;
