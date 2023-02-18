/*
    @Name: footerHTML
    @type: Function
    @author: Aaditya Pal
    @desc: Footer HTML rendering function
*/
const footerHTML = (classes, Logo, Constants) => {
  return (
    <div className={classes["footer-container"]}>
      <div className={classes["footer-logo-div"]}>
        <div
          className={classes["footer-logo"]}
          style={{ backgroundImage: `url(${Logo})` }}
        ></div>
      </div>
      <div className={classes["footer-links"]}>
        <div className={classes["footer-links-column"]}>
          <div className={classes["footer-links-items"]}>
            <div className={classes["footer-links-items-title"]}>
              {Constants.title1}
            </div>
            <div className={classes["footer-links-items-link"]}>
              {Constants.link1}
            </div>
            <div className={classes["footer-links-items-link"]}>
              {Constants.link2}
            </div>
            <div className={classes["footer-links-items-link"]}>
              {Constants.link3}
            </div>
          </div>
        </div>
        <div className={classes["footer-links-column"]}>
          <div className={classes["footer-links-items"]}>
            <div className={classes["footer-links-items-title"]}>
              {Constants.title2}
            </div>
            <div className={classes["footer-links-items-link"]}>
              {Constants.link4}
            </div>
          </div>
          <div className={classes["footer-links-items"]}>
            <div className={classes["footer-links-items-title"]}>
              {Constants.title3}
            </div>
            <div className={classes["footer-links-items-link"]}>
              {Constants.link5}
            </div>
          </div>
        </div>
        <div className={classes["footer-links-column"]}>
          <div className={classes["footer-links-items"]}>
            <div className={classes["footer-links-items-title"]}>
              {Constants.title4}
            </div>
            <div className={classes["footer-links-items-link"]}>
              {Constants.link6}
            </div>
            <div className={classes["footer-links-items-link"]}>
              {Constants.link7}
            </div>
            <div className={classes["footer-links-items-link"]}>
              {Constants.link8}
            </div>
            <div className={classes["footer-links-items-link"]}>
              {Constants.link9}
            </div>
          </div>
        </div>
        <div className={classes["footer-links-column"]}>
          <div className={classes["footer-links-items"]}>
            <div className={classes["footer-links-items-title"]}>
              {Constants.title5}
            </div>
            <div className={classes["footer-social-links"]}>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-regular fa-envelope"></i>
              <i class="fa-brands fa-facebook"></i>
            </div>
          </div>
          <div className={classes["footer-links-items"]}>
            <div className={classes["footer-links-items-title"]}>
              {Constants.title6}
            </div>
            <div className={classes["footer-links-items-link"]}>
              {Constants.link10}
            </div>
          </div>
        </div>
      </div>
      <div className={classes["footer-disclaimer"]}>{Constants.disclaimer}</div>
    </div>
  );
};
export default footerHTML;
