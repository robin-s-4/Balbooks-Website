// eslint-disable-next-line no-unused-vars
import React from "react";
import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Singup from "./components/Singup";

function App() {
  return (
    <>
      <div className=" dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Singup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
