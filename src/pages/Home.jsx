import Header from "../components/Header";
import BenefitCards from "../components/BenefitCards";
import ModelCards from "../components/ModelCards";
import { FaGithub, FaReact } from "react-icons/fa"

const Home = () => {
  return (
    <div style={{fontFamily:"Montserrat,Ariel"}}>
      <Header />

      <div className="pt-12"></div>

      <div className="home-hero pt-5 m-auto bg-gray-950 text-white">
        <h2 className="text-xl leading-relaxed md:text-3xl lg:text-4xl w-4/5 mx-auto py-10 text-center">
          Welcome to the{" "}
          <span className="text-blue-400 lg:text-5xl md:text-4xl sm:text-3xl text-2xl">
            InferHub
          </span>
          , Play with the state of the art open souce models powered by Hugging
          face  <span className="animate-pulse">🤗</span> inference API on the web <span className="animate-pulse">🌐</span>.
        </h2>
      </div>

      <section id="models" className="bg-black p-5">
        <ModelCards />
      </section>

      <div className="benefits bg-slate-950 p-10">
        <h2 className="text-3xl text-white font-bold text-center">
          Benfits of InferHub
        </h2>
        <BenefitCards />
      </div>


      <footer>
        <div className="bg-black p-5 text-white text-center">
          <p className="text-lg">Created with <FaReact className="text-blue-400 text-lg" style={{ display: "inline" }} /> </p>
          <p><a href="https://github.com/santhoshmani1/inferhub" target="_blank" rel="noreferrer" className="hover:underline  hover:text-gray-300 leading-loose text-xl">Support on Github <FaGithub className=" mx-2 my-1 text-white" style={{ display: "inline" }} /></a></p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
