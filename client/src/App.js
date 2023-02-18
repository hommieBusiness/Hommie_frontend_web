import "./App.css";
import { Fragment } from "react";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import HomeDesign1 from "./Components/HomeDesign1/homeDesign1";
/*
@name: App
@description: main function
@author: Aaditya Pal
*/

const App = () => {
  return (
    <Fragment>
      <Navbar />
      {/* <HomeDesign1/> */}
      <Footer />
    </Fragment>
  );
};
export default App;
