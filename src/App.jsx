import Nav from "./nav";
import BackgroundVideo from "./backgroundVideo";
import Header from "./header";
function App() {
  return (
    <>
      <div className="w-full h-full fixed border-1 border-amber-200">
        <BackgroundVideo />
        <Header />
        <Nav />
      </div>
    </>
  );
}

export default App;
