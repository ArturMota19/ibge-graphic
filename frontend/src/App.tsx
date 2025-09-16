//Imports
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Suspense, lazy } from "react";
// Styles
import "react-toastify/dist/ReactToastify.css";
// Components
// Pages
// unauth Pages
const Home = lazy(() => import("./pages/Home/page"));


function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Suspense fallback={<div className="loadingDiv">teste</div>}>
        <Routes>
          {/* Auth Routes */}
          <Route path="/" element={<Home/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
