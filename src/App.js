import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
// import Home from "./Components/Home";
const Home = React.lazy(() => import("./Components/Home"));
function App() {
  return (
    <React.Fragment>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Suspense>
      <Footer />
    </React.Fragment>
  );
}

export default App;
