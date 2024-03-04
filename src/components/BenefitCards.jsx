import serverImage from "../assets/server.png";
import globe from "../assets/globe.jpg";

const benefitsCards = [
  {
    title: "No Compute / GPU power required",
    description:
      "Get started by the most popular open source models without the need of Compute power.",
    coverImage: serverImage,
  },
  {
    title: "Try on the web",
    description:
      "Run state-of-the-art models directly in your browser on any device by accessing Hugging face interference APIs",
    coverImage: globe,
  },
];

const BenefitCards = () => {
  return (
    <div className="benefits-cards flex md:flex-row md:justify-evenly md:items-center flex-col ">
      {benefitsCards.map((card, index) => (
        <div
          key={index}
          className="card p-2 border-2 m-4 bg-gray-900 rounded-xl w-4/5 lg:w-3/4 my-4 border-white "
        >
          <h3 className="text-2xl font-semibold leading-relaxed text-white text-center p-2">
            {card.title}
          </h3>
          <div className="model-details flex flex-col lg:flex-row items-center justify-center">
            <img
              src={card.coverImage}
              alt={card.title}
              width={"300"}
              height={"300"}
              className="block mx-auto p-2 rounded-2xl"
            />
            <p className="text-2xl p-2 text-slate-300">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BenefitCards;
