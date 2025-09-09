import { loadHomePage } from "./homepage";
import { loadContactPage } from "./contact";
import "./assets/css/style.css";

const content = document.querySelector("#content");

content.appendChild(loadContactPage());
console.log("hello")