// 1. Ask Name and Show Welcome Message
document.getElementById("btnName").addEventListener("click", () => {
    let name = prompt("Enter your name:");
    document.getElementById("output").textContent = "Welcome, " + name + "!";
});

// 2. Age Eligibility Checker (18+)
document.getElementById("btnAge").addEventListener("click", () => {
    let age = Number(prompt("Enter your age:"));
    
    // Using if-else
    let message;
    if (age >= 18) {
        message = "You are eligible!";
    } else {
        message = "You are NOT eligible!";
    }

    // Using ternary operator
    let shortMsg = age >= 18 ? "(Ternary) Eligible" : "(Ternary) Not Eligible";

    document.getElementById("output").textContent = message + " " + shortMsg;
});

// 3. Array Practice
document.getElementById("btnArray").addEventListener("click", () => {

    let numbers = [1, 2, 3, 4, 5];

    let doubled = numbers.map(num => num * 2);
    let evens = numbers.filter(num => num % 2 === 0);
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);

    let result = `
        Numbers: ${numbers}
        Doubled (map): ${doubled}
        Even Numbers (filter): ${evens}
        Sum (reduce): ${sum}
    `;

    console.log(result);
    document.getElementById("output").textContent = result;
});
