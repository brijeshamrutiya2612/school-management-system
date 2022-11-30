import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Header from "./Components/Header";
// import Home from "./Components/Home";
const Home = React.lazy(() => import("./Components/Home"));
function App() {
  return <React.Fragment>
    <Header/>
    <Home/>
  </React.Fragment>;
}

export default App;
