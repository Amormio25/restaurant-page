import beefImg from  "./assets/images/beef.png";
import shoyuImg from  "./assets/images/shoyu.png";
import soyImg from  "./assets/images/soy.png";
import charsiuImg from  "./assets/images/charsiu.png";


function createOverlay() {
    const overlayDiv = document.createElement("div");
    overlayDiv.id = "menu-overlay";

    overlayDiv.appendChild(createItem("Beef Ramen", beefImg));
    overlayDiv.appendChild(createItem("Shoyu Ramen", shoyuImg));
    overlayDiv.appendChild(createItem("Soy Ramen", soyImg));
    overlayDiv.appendChild(createItem("Charsiu Ramen", charsiuImg));

    return overlayDiv;
}

function createItem(item, image) {
    const div = document.createElement("div");
    div.classList.add("item");

    const img = document.createElement("img");
    img.src = image;
    img.alt = item.toLowerCase();

    const span = document.createElement("span");
    span.textContent = item;

    div.appendChild(img);
    div.appendChild(span);

    return div;
}

function loadMenuPage() {
    const menuPage = document.createElement("div");
    menuPage.id = "menu";

    menuPage.textContent = "";
    menuPage.appendChild(createOverlay());

    return menuPage;
}

export { loadMenuPage };