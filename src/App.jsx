import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import TextToImage from "./pages/TextToImage";
import NotFound from "./pages/NotFound";
import { Analytics } from "@vercel/analytics/react";

function App() {

  return (
    <>
      <Analytics />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/TTI" element={<TextToImage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
