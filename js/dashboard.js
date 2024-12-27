// Predefined passcode
const PASSCODE = "1234";

// Card numbers dataset
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Elements
const loginContainer = document.getElementById("login-container");
const dashboardContainer = document.getElementById("dashboard-container");
const passcodeInput = document.getElementById("passcode");
const submitBtn = document.getElementById("submit-btn");
const errorMsg = document.getElementById("error-msg");
const cardsContainer = document.getElementById("cards-container");

// Handle passcode submission
submitBtn.addEventListener("click", () => {
    const enteredPasscode = passcodeInput.value;
    if (enteredPasscode === PASSCODE) {
        loginContainer.classList.add("hidden");
        dashboardContainer.classList.remove("hidden");
        displayCards();
    } else {
        errorMsg.textContent = "Incorrect passcode. Please try again.";
        passcodeInput.value = ""; // Clear the input field
    }
});

// Function to display cards
function displayCards() {
    cardsContainer.innerHTML = ""; // Clear any existing cards
    cards.forEach((cardNumber) => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.textContent = cardNumber;
        cardsContainer.appendChild(cardElement);
    });
}
