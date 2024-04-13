import { Route, Routes } from "react-router-dom";
import { Home, DashBoard } from "./Pages";
import "./App.css";
import Slides from "./Components/subComponents/Slides";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/dashboard"} element={<DashBoard />} />
      </Routes>
      <Slides />
    </div>
  );
}

export default App;
