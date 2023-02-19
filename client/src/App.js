import "./App.css";
import { Fragment } from "react";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import HomeDesign1 from "./Components/HomeDesign1/homeDesign1";
import HomeDesignZero from "./Components/HomeDesign0/home_design_0";
/*
@name: App
@description: main function
@author: Aaditya Pal
*/

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <HomeDesignZero /> 
    </Fragment>
  );
};
export default App;
