import Nav from "./components/nav";
import BackgroundVideo from "./components/backgroundVideo";
import Header from "./components/header";
import MyInfo from "./components/myInfo";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";

const App = () => {
  return (
    <div className="w-full min-h-screen relative select-none">
      <ScrollToTop />
      <BackgroundVideo className="absolute top-0 left-0 w-full h-full" />
      <Header />
      <Nav />
      <main className="flex w-full min-h-[calc(100vh-200px)] pl-[14%] justify-start items-start gap-[3%] mt-[5%]">
        <div className="sticky top-[100px] self-start w-100 min-w-100 h-[max-content]">
          <MyInfo />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
