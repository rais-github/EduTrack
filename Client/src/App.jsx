import { Route, Routes } from "react-router-dom";
import { Home, DashBoard } from "./Pages";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/dashboard"} element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
