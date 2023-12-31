import { renderNav } from "./nav";
import { renderHomepage } from "./homepage";
import { renderMenu } from "./menu";
import { renderAboutus } from "./aboutus";


renderNav();
renderHomepage();

const home = document.querySelector("nav li:nth-child(1) a");
const menu = document.querySelector("nav li:nth-child(2) a");
const aboutus = document.querySelector("nav li:nth-child(3) a");

home.addEventListener("click", renderHomepage);
menu.addEventListener("click", renderMenu);
aboutus.addEventListener("click", renderAboutus);
