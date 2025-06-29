import Header from "./layout/Header";
import Hero from "./layout/Hero";
import Footer from "./layout/Footer";
import ImageGrid from "./components/ImageGrid";
import { imagesData } from "./components/ImageGrid/constants";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ImageGrid images={imagesData} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
