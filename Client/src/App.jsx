import { Route, Routes } from "react-router-dom";
import { Home, DashBoard } from "./Pages";
import { PrimarySearchAppBar } from "./Components";
import { Topicwise } from "./Components";
import "./App.css";
import Slides from "./Components/subComponents/Slides";

function App() {
  return (
    <div>
      <PrimarySearchAppBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/dashboard"} element={<DashBoard />} />
        <Route path={"/topicwise"} element={<Topicwise />} />
      </Routes>
      <Slides />
    </div>
  );
}

export default App;
