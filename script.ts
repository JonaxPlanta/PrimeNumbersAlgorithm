// Requesting the prompt syncronization with terminal function from 'prompt-sync' library
const prompt = require('prompt-sync')();

// Setting the code
// Introduction message
console.log(`======================= \nPRIME NUMBERS ALGORITHM \n=======================`);

// The main function to run the code
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
    // it starts in 2 because 1 is not a prime number

    //I need to change it
    for (let number: number = 2; number <= limitNumber; number++) {
        if (number === 2 || number === 3 || number === 5 || number === 7) {
            // if the number is equal to two, three. five or seven. then it is a prime number
            primeArray.push(number);
            // The variable array length represents the position to insert the next prime number into the array
            // every time a prime number is found, this variable will receive one more unit (1)
        } 
        if (number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0) {
            // if the number is not divisible by two, three, five or seven, then it is a prime number
            primeArray.push(number);
        }
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
