import "./styles.css"
import { clearContent } from "./clearContent";
import { renderHomePage } from "./Home";
import { renderAboutPage } from "./About";

const home_button = document.getElementById("Home");
const about_button = document.getElementById("About");

renderHomePage();

home_button.addEventListener('click', () => {

    clearContent();

    renderHomePage();


});

about_button.addEventListener('click', () => {

    clearContent();

    renderAboutPage();


});