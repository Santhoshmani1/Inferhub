import Header from "../components/header"
import Icon from "../assets/icon.png"

const NotFound = () => {
  return (
    <>
      <Header />

      <div className="pt-10 404-container bg-black h-screen text-center text-white">
        <img src={Icon} alt="inferhub icon" className="m-auto" style={{ height: "400px", width: "300px" }} />
        <h1 className="text-3xl pt-10">404</h1>
        <p className="text-3xl leading-relaxed">Page not found</p>
        <a href="/">
          <button className="p-2 bg-blue-500 rounded-xl m-4">Go Back to Home</button>
        </a>
      </div>
    </>
  )
}

export default NotFound;
