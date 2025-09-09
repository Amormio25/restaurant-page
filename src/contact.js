function createOverlay() {
    const overlayDiv = document.createElement("div");
    overlayDiv.id = "overlay";

    const restaurant = document.createElement("h1");
    restaurant.textContent = "CHIGNAN RAMEN";

    overlayDiv.appendChild(restaurant);
    overlayDiv.appendChild(createContactInfo());
    overlayDiv.appendChild(createContactForm());

    return overlayDiv;
}

function createContactInfo() {
    const infoDiv = document.createElement("div");
    infoDiv.id = "contact-info";

    infoDiv.appendChild(createInfoTag("Hours: ", "Mon-Sat, 11am-10pm"));
    infoDiv.appendChild(createInfoTag("Location: ", "4260 Food Dr, Konoha"));
    infoDiv.appendChild(createInfoTag("Phone: ", "(123) 456-7890"));

    return infoDiv;
}

function createInfoTag(label, value) {
    const strong = document.createElement("STRONG");
    strong.textContent = label;

    const text = document.createElement("p");
    text.appendChild(strong);
    text.append(`${value}`);

    return text;
}

function createContactForm() {
    const formDiv = document.createElement("div");
    formDiv.id = "contact-form";
    
    const headingDiv = document.createElement("h3");
    headingDiv.textContent = "Send us a Message"

    const formElement = document.createElement("form");
    formElement.appendChild(createInputGroup("name", "text"));
    formElement.appendChild(createInputGroup("email", "email"));
    formElement.appendChild(createMessageSection());

    formDiv.appendChild(headingDiv);
    formDiv.appendChild(formElement);

    return formDiv;
}

function createInputGroup(id, type) {
    const inputGroup = document.createElement("div");
    inputGroup.classList.add("input-group");

    const input = document.createElement("input");
    input.id = id;
    input.type = type;
    input.placeholder = "";
    input.required = true;

    const span = document.createElement("span");
    span.textContent = (id === "name") ? "Name" : "Email";

    inputGroup.appendChild(input);
    inputGroup.appendChild(span);

    return inputGroup;
}

function createMessageSection() {
    const messageDiv = document.createElement("div");
    messageDiv.id = "message"

    const label = document.createElement("label");
    label.htmlFor = "message";
    label.textContent = "Message";

    const textArea = document.createElement("textarea");
    textArea.id = "message";
    textArea.rows = 5;
    textArea.required = true;

    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Send";

    messageDiv.appendChild(label);
    messageDiv.appendChild(textArea);
    messageDiv.appendChild(button);

    return messageDiv;
}

function loadContactPage() {
    const contactPage = document.createElement("div");
    contactPage.id = "contact";

    contactPage.textContent = "";
    contactPage.appendChild(createOverlay());

    return contactPage;
}

export { loadContactPage };