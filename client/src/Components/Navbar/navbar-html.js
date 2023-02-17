/*
    @Name: renderHTML
    @creator: Aaditya Pal
    @type: Function
    @desc: returns HTML for Navbar component
*/
export const renderHTML = (classes, Logo, Constants, toggler, navbarToggle,hamBurger) => {
  return (
    <div className={classes["navbar-root"]}>
      <div className={classes["navbar-responsive"]}>
        <div
          className={classes["navbar-logo-responsive"]}
          style={{ backgroundImage: `url(${Logo})` }}
        ></div>
        <i
          ref={hamBurger}
          className={
            "fa-sharp fa-solid fa-bars" + " " + classes["navbar-hamBurger"]
          }
          onClick={toggler}
        ></i>
      </div>
      <div className={classes["navbar-items"]} ref={navbarToggle}>
        <div
          className={classes["navbar-logo"]}
          style={{ backgroundImage: `url(${Logo})` }}
        ></div>
        <div className={classes["navbar-links"]}>
          <div className={classes["navbar-items-div"]}>
            <div className={classes["navbar-search"] + " " + "field"}>
              <p className="control has-icons-left">
                <input className="input is-small" placeholder="Location" />
                <span className="icon is-small is-left">
                  <i className="fa-sharp fa-solid fa-location-dot"></i>
                </span>
              </p>
            </div>
          </div>
          <div className={classes["navbar-items-div"]}>
            <p>{Constants.navLinkText1}</p>
          </div>
          <div className={classes["navbar-items-div"]}>
            <p className={classes["navbar-items-text-p"]}>
              {Constants.navLinkText2}
            </p>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          <div className={classes["navbar-items-div"]}>
            <p className={classes["navbar-items-text-p"]}>
              {Constants.navLinkText3}
            </p>
            <i className="fa-solid fa-angle-down"></i>
          </div>
          <div className={classes["navbar-items-div"]}>
            <p className={classes["navbar-items-text-p"]}>
              {Constants.navLinkText4}
            </p>
          </div>
          <div className={classes["navbar-items-div"]}>
            <p className={classes["navbar-items-text-p"]}>
              {Constants.navLinkText5}
            </p>
          </div>
          <div className={classes["navbar-items-div"]}>
            <p className={classes["navbar-items-text-p"]}>
              <i className="fa-sharp fa-solid fa-cart-shopping"></i>
            </p>
            {Constants.navLinkText6}
          </div>
          <div
            className={
              classes["navbar-items-text-button"] +
              " " +
              classes["navbar-items-div"]
            }
          >
            <p className={classes["navbar-items-text-p"]}>
              {Constants.navLinkText7}
            </p>
            <i className="fa-solid fa-angle-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
};