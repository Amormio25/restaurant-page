import narutoImage from "./assets/images/feature.gif";

function createHero() {
    const heroDiv = document.createElement("div");
    heroDiv.id = "hero";

    const restaurant = document.createElement("h1");
    const location = document.createElement("h3");

    restaurant.textContent = "CHIGNAN RAMEN";
    location.textContent = "4260 Food Dr, Konoha";

    heroDiv.appendChild(restaurant);
    heroDiv.appendChild(location);

    return heroDiv;
}

function createFeature() {
    const featureDiv = document.createElement("div");
    featureDiv.id = "feature";

    const image = document.createElement("img");
    const caption = document.createElement("p");

    image.src = narutoImage;
    caption.id = "about-us";
    caption.innerHTML = "At <strong>Chignan Ramen</strong>, we keep it simple: steaming bowls, bold flavors, and a spot that feels like home, right here in the heart of Konoha. Whether you’re a hungry shinobi fresh off a mission or just passing through, pull up a stool and slurp away!";

    featureDiv.appendChild(image);
    featureDiv.appendChild(caption);

    return featureDiv;
}

function loadHomePage() {
    const homepage = document.createElement("div");
    homepage.id = "home";

    homepage.textContent = "";
    homepage.appendChild(createHero());
    homepage.appendChild(createFeature());
    
    return homepage;
}

export { loadHomePage };