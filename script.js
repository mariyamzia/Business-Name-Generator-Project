// Create a business name generator by combining adjectives , shop names and another word.

/* Adjectives:
1. Crazy
2. Amazing
3. Fire

Shop Name:
1. Engine
2. Foods
3. Garments

Another name:
1. Bros
2. Limited
3. Hub

by using strings, generatig random name,nad by using functions.
*/



let firstName = {
    w1: "Crazy",
    w2: "Amazing",
    w3: "Fire",
}

let shopName = {
    q1: "Engine",
    q2: "Foods",
    q3: "Garments",
}

let thirdName = {
    a1: "Bros",
    a2: "Limited",
    a3: "Hub",
}
let Name2 = Math.floor(Math.random() * 3) + 1;
let selectedthird;

// Select the HTML elements
let businessName = document.getElementById("businessName");
let generateBtn = document.getElementById("generateBtn");

// Create a function to generate a business name
function generateBusinessName() {

    let Name = Math.floor(Math.random() * 3) + 1;
    let Name1 = Math.floor(Math.random() * 3) + 1;
    let Name2 = Math.floor(Math.random() * 3) + 1;

    let selectedFirst;
    let selectedshop;
    let selectedthird;

    if (Name == 1) {
        selectedFirst = firstName.w1;
    } else if (Name == 2) {
        selectedFirst = firstName.w2;
    } else if (Name == 3) {
        selectedFirst = firstName.w3;
    }

    if (Name1 == 1) {
        selectedshop = shopName.q1;
    } else if (Name1 == 2) {
        selectedshop = shopName.q2;
    } else if (Name1 == 3) {
        selectedshop = shopName.q3;
    }

    if (Name2 == 1) {
        selectedthird = thirdName.a1;
    } else if (Name2 == 2) {
        selectedthird = thirdName.a2;
    } else if (Name2 == 3) {
        selectedthird = thirdName.a3;
    }

    businessName.textContent =
        `${selectedFirst} ${selectedshop} ${selectedthird}`;
}

// Generate a name when the button is clicked
generateBtn.addEventListener("click", generateBusinessName);
