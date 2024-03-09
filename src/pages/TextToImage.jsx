import { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import generateImage from "../helpers/generateImage.js";

// Importing images for the examples carousel. 
import alienImg from "../assets/alien.png";
import astronautImg from "../assets/astronaut.png";
import astronautWithUnicorn from "../assets/astronautwithunicorn.webp";
import tiger from "../assets/tiger.webp"
import panda from "../assets/panda.webp"
import dog from "../assets/dog.webp"
import futuristicCity from "../assets/futuristicCity.png"

const sdxlImages = [alienImg, astronautImg, astronautWithUnicorn, tiger, panda, dog, futuristicCity];

const TextToImage = () => {

  const [prompt, setPrompt] = useState("");
  const [promptPlaceholder, setPromptPlaceholder] = useState("Enter a prompt");
  const [images, setImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  // Useffect to change the sdxl images from the array.
  // Changes the image in the carousel every 2 seconds.
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % sdxlImages.length);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [currentImageIndex])

  // Generates an image based on the prompt by fetching the inference API endpoint.
  // Adds the newly generated image to existing images array.

  const handleGenerateImage = async () => {
    const newImage = await generateImage(prompt);
    setImages((prevImages) => [...prevImages, newImage]);
  };

  return (
    <>
      <Header />
      <div className="pt-10"></div>

      <div className="pt-10 bg-gray-950 min-h-screen">
        <h2 className="text-2xl text-center font-bold leading-relaxed text-white">Text to Image</h2>

        <div className="text2image-container">
          <input
            type="text"
            name=""
            id=""
            placeholder={promptPlaceholder}
            onChange={(e) => {
              setPrompt(e.target.value); s
            }}
            value={prompt}
            className="h-20 w-3/4 p-4 text-lg leading-normal mx-auto my-4 rounded-xl bg-gray-200 border-2 border-gray-600 focus:outline-none focus:border-sky-600 block lg:w-3/4"
          />
          <button
            type="button"
            onClick={handleGenerateImage}
            className="text-slate-100 text-xl border-blue-400 rounded-lg border-2 px-4 py-2 m-auto bg-gray-900 hover:bg-black hover:border-yellow-500 hover:text-white select-none mx-auto block"
          >
            Generate Image
          </button>
        </div>

        <h2 className="text-lg pt-8 m-4 font-bold text-white text-center">My Images</h2>
        <div className="flex justify-evenly items-center flex-wrap">

          {images.map((image, index) => {

            return (
              <div key={index} className="text2image-image-container">
                <img
                  src={image}
                  alt="generated"
                  className="object-cover" style={{ height: "300px", width: "300px" }}
                />
              </div>
            );
          })}

        </div>
        <div>
          <h3 className="text-xl pt-12 font-bold text-white text-center ">Generated with stable diffusion SDXL </h3>
        </div>
        <div className="flex justify-center items-center lg:w-3/4 m-auto w-screen flex-wrap animate-pulse">
          <img src={sdxlImages[currentImageIndex]} alt="carousel" width={"300px"} height={"300px"} className="m-auto p-4 rounded-xl" />

        </div>
      </div>
    </>
  );
};

export default TextToImage;
