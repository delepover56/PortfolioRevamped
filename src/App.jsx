import Nav from "./components/nav";
import BackgroundVideo from "./components/backgroundVideo";
import Header from "./components/header";
import MyInfo from "./components/myInfo";

const App = () => {
  return (
    <div className="w-full h-full fixed">
      <BackgroundVideo />
      <Header />
      <div className="flex w-full h-full justify-start items-start">
        <Nav />
        <MyInfo />
      </div>
    </div>
  );
};

export default App;
