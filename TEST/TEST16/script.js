// Convert string to uppercase
document.getElementById("uppercaseButton").addEventListener("click", function () {
    const input = document.getElementById("uppercaseInput").value;

    if (input.trim() === "") {
        alert("Please enter a valid string for Uppercase Conversion.");
        return;
    }

    document.getElementById("uppercaseResult").textContent = input.toUpperCase();
});

// Convert string to lowercase
document.getElementById("lowercaseButton").addEventListener("click", function () {
    const input = document.getElementById("lowercaseInput").value;

    if (input.trim() === "") {
        alert("Please enter a valid string for Lowercase Conversion.");
        return;
    }

    document.getElementById("lowercaseResult").textContent = input.toLowerCase();
});

// Extract substring from index 2 to 5
document.getElementById("substringButton").addEventListener("click", function () {
    const input = document.getElementById("substringInput").value;

    if (input.trim() === "") {
        alert("Please enter a valid string for Substring Extraction.");
        return;
    }

    document.getElementById("substringResult").textContent = input.slice(2, 6); // Slices from index 2 to 5
});
