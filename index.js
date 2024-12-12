// Create an array containing various data types and two nested arrays of numbers
const mixedArray = ["john","doe",42,true,{ car: "BMW" },[10, 20, 30, 40],[5, 15, 25, 35]];

// Loop through the mixedArray to identify and process the nested arrays
let totalSum = 0; mixedArray.forEach(item => {
    if (Array.isArray(item)) {
        const lastTwo = item.slice(-2); // Slices the last two elements of the array
        const sum = lastTwo.reduce((a, b) => a + b, 0); // Calculate their sum
        console.log(`Last two numbers: ${lastTwo}, Sum: ${sum}`);
        totalSum += sum; // Add the sum to the totalSum
    }
});

console.log(`Total sum of the last two numbers from all nested arrays: ${totalSum}`);