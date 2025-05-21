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
      <Header />
      <Nav />
      <main className="flex w-full h-full pl-[14%] justify-start items-start gap-[3%] mt-[5%]">
        <MyInfo />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
