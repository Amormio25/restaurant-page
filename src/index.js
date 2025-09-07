import { loadHomePage } from "./homepage";
import "./assets/css/style.css";

const content = document.querySelector("#content");

content.appendChild(loadHomePage());
console.log("hello")