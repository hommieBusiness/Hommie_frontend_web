import classes from "./footer.module.css";
import Logo from "../../Assets/Images/Logo.png";
import * as Constants from "./footerConstants";
import footerHTML from "./footerHTML";
import { Fragment } from "react";
/*
    @Name: Footer
    @type: Functional Component
    @author: Aaditya Pal
    @desc: Footer Component
*/
const Footer = () => {
  return <Fragment>{footerHTML(classes, Logo, Constants)}</Fragment>;
};
export default Footer;
