// Requesting the prompt syncronization with terminal function from 'prompt-sync' library
const prompt = require('prompt-sync')();

// Setting the code
// Introduction message
console.log(`
    =======================
    PRIME NUMBERS ALGORITHM          
    =======================
    `);

// The main function to run the code
function mainFunction() {
    // Defining the variable
    const limitNumber: number = Number(prompt("Enter the limit number: "));
    const primeArray = new Array();

    // Verifying for any errors as
    if (limitNumber < 2) {
        // in limit number being less than 2
        console.log(`
                ======================================================
                READING ERROR: the limit value must be greater than 1!
                ======================================================
                `);
        return mainFunction();
    } else if (Number.isInteger(limitNumber) === false) {
        // the limit value not being an integer
        console.log(`
                ===============================================
                READING ERROR: the limit value must be itenger!
                ===============================================
                `);
        return mainFunction();
    };

    // Creating a loop to find each prime number until reaching the limit number
    // it starts in 2 because 1 is not a prime number
    for (let number: number = 2, arrayLength: number = primeArray.length; number <= limitNumber; number++) {
        if (number === 2 || number === 3 || number === 5 || number === 7) {
            // if the number is equal to two, three. five or seven. then it is a prime number
            primeArray[arrayLength] = number;
            // The variable array length represents the position to insert the next prime number into the array
            // every time a prime number is found, this variable will receive one more unit (1)
            arrayLength++;
        } else if (number % 2 !== 0 && number % 3 !== 0 && number % 5 !== 0 && number % 7 !== 0) {
            // if the number is not divisible by two, three, five or seven, then it is a prime number
            primeArray[arrayLength] = number;
            arrayLength++;
        }
    };
    // Showing the table with the prime numbers
    console.log(`
        Array with the prime numbers up to ${limitNumber}: 
        [${primeArray.join(', ')}]
        `);
    // Asking the user if he whants the operation to be repeated
    repeatingMain();
};

// Function that asks the user if he whants the operation to be repeated using the prompt syncronization with terminal
function repeatingMain() {
    const asking: string = String(prompt(`Would you like the operation to be repeated? Enter 'y' for Yes and 'n' for N: `));

    // Assigning a character to each of the following options
    switch (asking) {
        // 'y' if you want the operation to repeat
        case "y":
           console.log(`
            ======================
            Repeating operation...
            ======================
            `);
            return mainFunction();
        ;
        // 'n' if you want the operation to finish
        case "n":
        console.log(`
            ===========================
                Thank you for using
            the prime number algorithm!
            ===========================
                 By JonaxPlanta :]
            ===========================
            `);
        break;
        
        // In this case, the function repeats if the user entered any other character instead of 'y' or 'n'
        default:
            console.log(`
                =========================================
                READING ERROR: enter a correct character! 
                =========================================
                `);
            return repeatingMain();
        ;
    } 
};

// Starting code
mainFunction();
