import { Link } from "react-router-dom";
import sdxlPreview from "../assets/sdxl-example.png";
import ttsImage from "../assets/tts.webp";
const models = [
  {
    title: "Text to Image",
    modelName: "stable-diffusion-xl-base-1.0",
    poweredBy: "Stability AI",
    description:
      "SDXL consists of an ensemble of experts pipeline for latent diffusion: In a first step, the base model is used to generate (noisy) latents, which are then further processed with a refinement model specialized for the final denoising steps",
    image: sdxlPreview,
    navigationPath: "/TTI",
  },
  // {
  //   title: "Text to Voice",
  //   modelName: "Massively Multilingual Speech (MMS) english TTS",
  //   poweredBy: "Facebook (meta)",
  //   description: "This model is part of Facebook's Massively Multilingual Speech project, aiming to provide speech technology across a diverse range of languages.",
  //   image: ttsImage,
  //   navigationPath: "/text-to-speech",
  // },
  // {
  //   title: "Text summariser",
  //   modelName: "",
  //   poweredBy: "",
  //   description: "",
  //   image: "",
  //   navigationPath: "/summarise",
  // },
];

const ModelCards = () => {
  return (
    <div id="models-card-wrapper">
      <h2 className="text-2xl text-center leading-relaxed p-2 text-white font-bold">Models on Inferhub</h2>
      {models.map((model) => {
        const {
          title,
          modelName,
          poweredBy,
          description,
          image,
          navigationPath,
        } = model;
        return (
          <>
            <div className="model bg-gray-950 lg:w-1/2 md:2/3 w-4/5 mx-auto p-4 mb-10 rounded-xl">
              <h3
                className="p-2 text-2xl leading-relaxed text-white font-bold"
                style={{ fontFamily: "Poppins,sans-serif" }}
              >
                {title}
              </h3>
              <div className="model-name text-lg leading-normal text-white">
                <span className="font-light">Model : </span>
                {modelName}
              </div>
              <div className="text-slate-50 text-lg">
                <span className="font-light">Powered by : </span>
                {poweredBy}
              </div>
             <img src={image} alt={modelName} className="p-4 rounded-2xl mx-auto" height={"400"}  width={"400"} />
              <div className="text-slate-300 text-sm md:text-lg leading-relaxed p-2 mx-auto">{description}</div>
              <Link
                to={navigationPath}
                className="flex justify-start flex-row-reverse items-center py-2"
              >
               <button className="text-slate-100  text-xl border-blue-400 hover:border-white rounded-lg border-2 px-4 py-2 w-1/2  m-auto bg-blue-500 hover:bg-blue-600 hover:text-white font-bold">
                Try it out
               </button>
              </Link>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ModelCards;
