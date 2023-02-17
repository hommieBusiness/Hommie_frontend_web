import classes from "./navbar.module.css";
import {useRef} from 'react';
import "bulma/css/bulma.min.css";
import Logo from "../../Assets/Images/Logo.png";
import * as Constants from "./navbar_constants";
import * as HTML from "./navbar-html";
/*
@name: Navbar 
@type: Functional Component
@author: Aaditya Pal
@desc: Component for navbar 
*/
const Navbar = () => {

    /* 
        useRef for DOM access
    */
    const hamBurger = useRef(null);
    const navbarToggle = useRef(null);

    /*
        Navbar toggler
    */
    const toggleSideBar = useRef(0);
    
    //Toggler function to open and close Navbar
    const toggler = () => {
        if(toggleSideBar.current == 0){
            hamBurger.current.className = `fa-solid fa-xmark ${classes["navbar-hamBurger"]}`;
            toggleSideBar.current = 1;
            navbarToggle.current.style.display = "block";
        }
        else{
            hamBurger.current.className = `fa-sharp fa-solid fa-bars ${classes["navbar-hamBurger"]}`;
            navbarToggle.current.style.display = "none";                                                                
            toggleSideBar.current = 0;
        }
    }
    return HTML.renderHTML(classes, Logo, Constants, toggler, navbarToggle,hamBurger);
}

export default Navbar;