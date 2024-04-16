import { Route, Routes } from "react-router-dom";
import { Home, DashBoard } from "./Pages";
import { Topicwise, PrimarySearchAppBar, Compare, Student } from "./Components";
import "./App.css";
import Slides from "./Components/subComponents/Slides";
import { useSelector } from "react-redux";
function App() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div>
      {user && <PrimarySearchAppBar />}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/dashboard"} element={<DashBoard />} />
        <Route path={"/topicwise"} element={<Topicwise />} />
        <Route path={"/compare"} element={<Compare />} />
        <Route path={"/students"} element={<Student />} />
      </Routes>
      <div className=" fixed bottom-0 left-1/2 transform -translate-x-1/2 ">
        {user && <Slides />}
      </div>{" "}
    </div>
  );
}

export default App;
