// Function to return a promise that resolves with an array of numbers after 3 seconds
function getNumbers() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

// Function to filter out odd numbers from an array
function filterOutOddNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

// Function to multiply even numbers in an array by 2
function multiplyEvenNumbers(numbers) {
    return numbers.map(num => num * 2);
}

// Function to update the text of an HTML element with an ID of "output"
function updateOutput(text) {
    document.getElementById('output').innerText = text;
}

// Chain promises to manipulate data and update the HTML element
getNumbers()
    .then(numbers => {
        // Filter out odd numbers after 1 second
        setTimeout(() => {
            const evenNumbers = filterOutOddNumbers(numbers);
            updateOutput(evenNumbers.join(', '));
        }, 1000);
        return numbers;
    })
    .then(numbers => {
        // Multiply even numbers by 2 after 2 seconds
        setTimeout(() => {
            const multipliedNumbers = multiplyEvenNumbers(numbers);
            updateOutput(multipliedNumbers.join(', '));
        }, 2000);
    });
