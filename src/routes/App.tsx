import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export const App = () => {
  return (
    <div className="w-full bg-white min-h-screen px-6 pb-12">
      <Header />
      <Hero />
    </div>
  );
};

export default App;
