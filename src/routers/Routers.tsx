import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default Routers;
