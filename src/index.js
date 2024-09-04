import "./styles.css"
import { clearContent } from "./clearContent";
import { renderHomePage } from "./Home";
import { renderAboutPage } from "./About";
import { renderContactPage } from "./Contact";

const home_button = document.getElementById("Home");
const about_button = document.getElementById("About");
const contact_button = document.getElementById("Contact");

renderHomePage();

home_button.addEventListener('click', () => {

    clearContent();

    renderHomePage();


});

about_button.addEventListener('click', () => {

    clearContent();

    renderAboutPage();


});

contact_button.addEventListener('click', () => {

    clearContent();

    renderContactPage();


});