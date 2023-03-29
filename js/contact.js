const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const contactForm = document.querySelector("#contact-form");
const contactFormDiv = document.querySelector("#contact-form-div");
const sentMessageConfirmation = document.querySelector("#sent-message-screen");
const newFormButton = document.querySelector("#new-form");

//testing
// emailInput.value = "a@a";

// Säkerställer att rätt div:ar laddas.
sentMessageConfirmation.style.display = "none";
contactFormDiv.style.display = "block";

clearAllInputFields();
nameInput.focus();

// Justerar storleken på text-arean, för meddelandet, i realtid
messageInput.addEventListener('input', (e) =>{
    e.preventDefault();
    console.log("messageInput changed");
    messageInput.style.height = (messageInput.scrollHeight+2)+"px";
})

// Byter content utan att omdirigera användaren efter "submit form"
contactForm.addEventListener('submit', (e) =>{
    console.log("eventlistener (contactform)")
    switchVisibility(contactFormDiv);
    switchVisibility(sentMessageConfirmation)
    newFormButton.focus();
})

// Byter tillbaka till nytt formulär
newFormButton.addEventListener('click', (e) =>{
    console.log("new form button");
    clearAllInputFields()
    switchVisibility(contactFormDiv);
    switchVisibility(sentMessageConfirmation)
})

// Ändrar html-element till hidden eller shown
function switchVisibility(element){
    if (element.style.display === "none") element.style.display="block";
    else element.style.display="none";
}

function clearAllInputFields() {
    nameInput.value = null;
    emailInput.value = null;
    messageInput.value = null;
}