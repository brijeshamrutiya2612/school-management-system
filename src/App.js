import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Privaterouter from "./Auth/Privaterouter";
import { useSelector } from "react-redux";
import Dashboard from "./Admincomponents/Dashboard";
import Student from "./Admincomponents/Student";
import Event from "./Admincomponents/Event";
import Teachers from "./Admincomponents/Teachers";
import Admission from "./Admincomponents/Admission";
// import Home from "./Components/Home";
const Home = React.lazy(() => import("./Components/Home"));
function App() {
  const { adminInfo } = useSelector((state) => state.admin);
  return (
    <React.Fragment>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/" element={<Privaterouter />}>
            <Route path="/admin" element={<Dashboard />}></Route>
            <Route path="/student" element={<Student />}></Route>
            <Route path="/teachers" element={<Teachers />}></Route>
            <Route path="/event" element={<Event />}></Route>
            <Route path="/admission" element={<Admission />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Suspense>
      <Footer />
    </React.Fragment>
  );
}

export default App;
