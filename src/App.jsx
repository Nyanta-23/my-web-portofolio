import Routes from "./routes/index";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Stars from "./components/Stars";

function App() {

  return (
    <section className="font-mono">
      <Navbar />
      <section className="py-24">
        <Routes />
      </section>
      <Footer />
      {/* <Stars /> */}
    </section>
  );
}

export default App;
