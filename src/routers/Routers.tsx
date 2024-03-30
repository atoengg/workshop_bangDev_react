import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Settings from "../pages/settings/Settings";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  );
};

export default Routers;
