import classes from "./home_design_1.module.css";
import SelectMealImage from "../../Assets/Images/Home/SelectMealImage.png";
/*
@name: Navbar 
@type: Functional Component
@author: Amrit Shukla
@desc: Component for home page
*/

const HomeDesign1 = () => {
    return (
      <div>
        <div className={classes["design1-root"]}>
          <div className={classes["design1-left"]}>
            <div className={classes["design1-left-top"]}>
              Your can select your meal from
            </div>
            <div className={classes["design1-left-bottom"]}>
              View Meals
            </div>
          </div>
        </div>
      </div>
    );
}

export default HomeDesign1

