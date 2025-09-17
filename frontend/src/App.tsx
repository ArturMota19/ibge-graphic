//Imports
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Suspense, lazy } from "react";
// Styles
import "react-toastify/dist/ReactToastify.css";
import Loading from "./components/basics/Loading/Loading";
// Components
// Pages
// unauth Pages
const Home = lazy(() => import("./pages/Home/page"));
const PibEvolution = lazy(() => import("./pages/PibEvolution/page"))
const YearlyPib = lazy(() => import("./pages/YearlyPib/page"))


function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Suspense fallback={<div className="loadingDiv"><Loading/></div>}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/pib-evolution" element={<PibEvolution/>} />
          <Route path="/yearly-pib" element={<YearlyPib/>} />
          
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
