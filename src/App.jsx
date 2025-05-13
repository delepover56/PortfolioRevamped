import Nav from "./components/nav";
import BackgroundVideo from "./components/backgroundVideo";
import Header from "./components/header";
import MyInfo from "./components/myInfo";

const App = () => {
  return (
    <div className="w-full min-h-screen relative">
      <BackgroundVideo className="absolute top-0 left-0 w-full h-full" />
      <Header /> {/* Header stays sticky */}
      <Nav />
      <MyInfo />
    </div>
  );
};

export default App;
