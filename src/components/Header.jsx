import { Link } from "react-router-dom";
import Icon from "../assets/icon.png"

const Header = () => {

  const navigationItems = [
    {
      label: "Home",
      path: "/",
      id: "1"
    },
    {
      label: "Text to Image",
      path: "/TTI",
      id: "2"
    },
    // {
    //   label: "Text to Speech",
    //   path: "/TTS",
    //   id:"3"
    // }
    {
      label: "Support on Github",
      path: "https://github.com/santhoshmani1/inferhub",
      id: "3"
    }
  ];

  function toggleNavbar() {
    const navbar = document.getElementById("navbar-solid-bg");
    navbar.classList.toggle("hidden");
  }

  return (
    <div className="fixed w-screen z-10">
      <nav className="py-1 shadow bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <Link
            to={"/"}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Icon} alt="Inferhub" className="w-10 h-10" />
            <h1 className="self-center px-2 text-3xl lg:text-3xl font-semibold text-white">
              InferHub
            </h1>
          </Link>
          <button
            onClick={toggleNavbar}
            data-collapse-toggle="navbar-solid-bg"
            type="button"
            className="inline-flex items-center p-1 text-white border-white w-10 h-10 justify-center text-sm hover:border rounded-lg md:hidden"
            aria-controls="navbar-solid-bg"
            aria-expanded="false"
          >
            <span className="material-icons">menu</span>
          </button>
          <div
            className=" w-full md:block md:w-auto hidden"
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col font-normal mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {navigationItems.map((navItem) => {
                return (
                  <Link key={navItem.id} to={navItem.path} className="text-slate-200 text-xl text-center p-1 hover:underline hover:to-gray-600">{navItem.label}</Link>
                )
              })}
            </ul>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default Header;
