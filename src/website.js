import { loadHomePage } from "./homepage";
import { loadMenuPage } from "./menu";
import { loadContactPage } from "./contact";
import "./assets/css/style.css";

function setActivePage(event, nav, content) {
    const target = event.target;
    if (target.tagName !== "BUTTON" || target.classList.contains("active")) return;
    
    const activePage = nav.querySelector(".active");
    activePage.classList.remove("active");

    target.classList.add("active");

    content.innerHTML = "";
    const pageLoaders = {
        Home: loadHomePage,
        Menu: loadMenuPage,
        Contact: loadContactPage
    };
    const loadPage = pageLoaders[target.textContent];
    content.appendChild(loadPage())
}

function displayWebsite() {
    const nav = document.querySelector("nav");
    const content = document.querySelector("#content");

    content.appendChild(loadHomePage());
    nav.addEventListener("click", (event) => setActivePage(event, nav, content));
}

export { displayWebsite };