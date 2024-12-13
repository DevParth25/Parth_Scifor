// Array Manipulation Feature
const cars = ["Toyota", "Honda", "Ford", "BMW"];
document.getElementById("original-array").textContent = cars.join(", ");

// Add custom string and "VOLVO" to the array
document.getElementById("add-volvo-btn").addEventListener("click", () => {
    const inputText = document.getElementById("array-input").value.trim();
    if (inputText) {
        cars.push(inputText); // Add the custom string to the array
    }
    cars.push("VOLVO"); // Add "VOLVO" to the array
    document.getElementById("updated-array").textContent = cars.join(", ");
    console.log("Updated Array:", cars); // Log the updated array in console
    document.getElementById("array-input").value = ""; // Clear input field
});

// Text Uppercase Conversion Feature
document.getElementById("text-input").addEventListener("input", (event) => {
    const inputText = event.target.value;
    const uppercaseText = inputText.toUpperCase();
    document.getElementById("uppercase-output").textContent = uppercaseText;
    console.log("Uppercase Text:", uppercaseText); // Log the uppercase text in console
});
