import classes from "./home_design_0.module.css";
import Home_0 from "../../Assets/Images/Home_0.png";
/*
    @Name: Home_design_zero
    @type: Functional Component
    @author: Aaditya Pal
    @desc: Component number 0 for the home page
*/
const HomeDesignZero = () => {
  return (
    <div className={classes["home-design-0-container"]}>
      <div
        className={
          classes["home-design-0-content-1"] +
          " " +
          classes["home-design-0-image"]
        }
        style={{ backgroundImage: `url(${Home_0})` }}
      ></div>
      <div className={classes["home-design-0-content-2"]}>
        <div className={classes["home-design-0-content-div"]}>
          <div className={classes["home-design-0-title"]}>
            <p>
              Quick{" "}
              <div
                style={{ display: "inline", color: "var(--color-secondary-1)" }}
              >
                meal
              </div>{" "}
              delivery
            </p>{" "}
            in your{" "}
            <div
              style={{ display: "inline", color: "var(--color-secondary-5)" }}
            >
              pocket
            </div>
            !
          </div>
          <div className={classes["home-design-0-subtitle"]}>
            We are a bootstrapped startup that offers premium tiffin services in
            kolkata.
          </div>
          <div className={classes["home-design-0-button-div"]}>
            <button className={classes["home-design-0-button"]}>
              Meals <i className="fa-solid fa-bowl-food"></i>
            </button>

            <button className={classes["home-design-0-button"]}>
              Timetable <i className="fa-solid fa-calendar-days"></i>
            </button>
          </div>
          <div className={classes["home-design-0-user-count"]}>
            <div className={classes["home-design-0-user-count-title"]}>
              <p className={classes["home-design-0-user-count-number"]}>
                103{" "}
                <i
                  className={
                    "fa-solid fa-user-plus" +
                    " " +
                    classes["home-design-0-userIcon"]
                  }
                ></i>
              </p>
            </div>
            <div className={classes["home-design-0-user-count-subtitle"]}>
              <p
                style={{ display: "inline", color: "var(--color-secondary-5)" }}
              >
                Happy
              </p>{" "}
              Customers!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeDesignZero;
