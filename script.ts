// Requesting the prompt syncronization with terminal function from 'prompt-sync' library
const prompt = require('prompt-sync')();

// Setting the code
// Introduction message
console.log(`======================= \nPRIME NUMBERS ALGORITHM \n=======================`);

// The isPrime function verifies prime numbers
const isPrime = (number : number) => {
    if (number < 2) return false; // If number is less than 2, it is not prime
    for (let looper: number = 2; looper <= Math.sqrt(number); looper++) { // Verify numbers until square root of number
        if (number % looper === 0) return false; // If number is divided by loop number, it is not prime
    }
    return true; // If there is not divided, it is prime
};


// The mainFunction to run the code
function mainFunction() {
    // Defining the variable
    const limitNumber = Number(prompt("Enter the limit number: "));
    const primeArray = [];

    // Verifying for any errors as
    if (limitNumber < 2) {
        // in limit number being less than 2
        console.log(`====================================================== \nREADING ERROR: minimum value is 2! \n======================================================`);
        mainFunction();
        return;
    }
    if (Number.isInteger(limitNumber) === false) {
        // the limit value not being an integer
        console.log(`====================================== \nREADING ERROR: value must be intenger! \n======================================`);
        mainFunction();
        return;
    };

    // Creating a loop to find each prime number until reaching the limit number
    // It starts in 2 because 1 is not a prime number
    for (let looper: number = 2; looper <= limitNumber; looper++) { // It will verify until the array is full
        if (isPrime(looper)) { // If the function isPrime return true
            primeArray.push(looper); // the number enters in array
        };
    };
    // Showing the table with the prime numbers
    console.log(`====================================== \nArray with the prime numbers up to ${limitNumber}: \n[${primeArray.join(', ')}] \n======================================`);
    // Asking the user if he whants the operation to be repeated
    repeatingMain();
};

// Function that asks the user if he whants the operation to be repeated using the prompt syncronization with terminal
function repeatingMain() {
    const asking: string = String(prompt(`Would you like the operation to be repeated? Enter 'y' for Yes and 'n' for No: `)).toLowerCase();

    // Assigning a character to each of the following options
    switch (asking) {
        // 'y' if you want the operation to repeat
        case "y":
            console.log(`====================== \nRepeating operation... \n======================`);
            mainFunction();
            break;
        
        // 'n' if you want the operation to finish
        case "n":
        console.log(`=========================== \n    Thank you for using \nthe prime number algorithm! \n \n      By JonaxPlanta :] \n===========================`);
        break;
        
        // In this case, the function repeats if the user entered any other character instead of 'y' or 'n'
        default:
            console.log(`========================================= \nREADING ERROR: enter a correct character! \n=========================================`);
            repeatingMain();
            break;
    } 
};

// Starting code
    mainFunction();
