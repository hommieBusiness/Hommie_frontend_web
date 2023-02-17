import { Fragment } from "react";
/*
    @Name: renderHTML
    @creator: Aaditya Pal
    @type: Function
    @desc: returns HTML for Navbar component
*/
export const renderHTML = (
  classes,
  Logo,
  Constants,
  toggler,
  navbarToggle,
  hamBurger
) => {
  return (
    <Fragment>
      <div className={classes["navbar-container"]}>
        <div
          className={classes["navbar-logo"]}
          style={{ backgroundImage: `url(${Logo})` }}
        ></div>
        <div className={classes["navbar-items"]}>
          {navbarLinks(classes, Constants)}
        </div>
        <div className={classes["navbar-toggle"]}>
          <i
            ref={hamBurger}
            className={
              "fa-sharp fa-solid fa-bars" + " " + classes["navbar-hamBurger"]
            }
            onClick={toggler}
          ></i>
        </div>
      </div>
      {/* This is the div that will be toggled and shown when the screen width is 1000px */}
      <div className={classes["navbar-responsive-item"]} ref={navbarToggle}>
        {navbarLinks(classes, Constants)}
      </div>
    </Fragment>
  );
};
/* 
  @Name: navbarLinks
  @type: Function
  @author:Aaditya Pal
  @desc: returns the links for navbar
*/
const navbarLinks = (classes, Constants) => {
  return (
    <Fragment>
      <div className={classes["navbar-responsive-item-div"]}>
        <p>{Constants.navLinkText1}</p>
      </div>
      <div className={classes["navbar-responsive-item-div"]}>
        <p>{Constants.navLinkText2}</p>
      </div>
      <div className={classes["navbar-responsive-item-div"]}>
        <p>{Constants.navLinkText3}</p>
      </div>
      <div className={classes["navbar-responsive-item-div"]}>
        <p>{Constants.navLinkText4}</p>
      </div>
      <div className={classes["navbar-responsive-item-div"]}>
        <p>{Constants.navLinkText5}</p>
      </div>
      <div className={classes["navbar-responsive-item-div"]}>
        <i
          className="fa-sharp fa-solid fa-cart-shopping"
          style={{ marginRight: "0.4em" }}
        ></i>
        <p>{Constants.navLinkText6}</p>
      </div>
      <div className={classes["navbar-responsive-item-div"]}>
        <i
          className="fa-solid fa-user"
          style={{ marginRight: "0.4em", color: "var(--color-secondary-1)" }}
        ></i>
        <p>{Constants.navLinkText7}</p>
      </div>
    </Fragment>
  );
};
