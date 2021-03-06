/*
hw 1: a program that has an input, a button, the input takes a number and 
when u press the button, it lists out all the prime numbers up to and 
including the inputted number.

They must be in an ordered list (<ol> tag). no id's, only classes.
Below that on the page, put a copy of the very first assignment I gave you 
(the prime factors one) and do the same thing but instead of writing it out 
as a string, put the answer as an ordered list (<ol>). (edited) 

hw 2: hw 1 with no classes (still no id's) 
*/

function sieveUpTo(n) {
    let A = [...Array(n-1).keys()];
    A = A.map(function(a) {return a + 2});
    console.log(A);
    for (let i = 0; i <= Math.sqrt(n); i++) 
    {
        console.log(i)
        if (A[i] !== null) 
        {
            let prime = A[i];
            let j = prime**2;
            while (j <= n) 
            {
                console.log('nulling')
                console.log(j)
                A[j-2] = null;
                j += prime;
            }
        }
    }

    return A.filter(a => a !== null);
}

function isPrime(num) {
    for (let j = 2; j < num; j++) {
        if (num % j == 0) return false;
    }
    return true;
}

function calculatePrimeFactors() {
    let userInput = document.querySelector("#userInput").value;
    console.log(userInput)
    let factors = sieveUpTo(userInput);
    // let factors = [];
    // if (userInput < 0) {
    //     userInput *=  -1;
    // }

    // for (let i = 2; i < userInput; i++) {
    //     console.log(i)
    //     if (userInput % i == 0) {
    //         console.log('divides')
    //         if (isPrime(i)) {
    //             factors.push(i);
    //             console.log('isPrime')
    //         } else {
    //             console.log('not prime')
    //         }
    //     }
    // }
    
    // console.log(factors)
    return factors
}

function showFactors(factors) {
    let factorString
    if (factors.length === 0) {
        factorString = "Sorry, can't find any prime factors for ya!"
    } else {
        factorString = factors.toString()
    }
    
    let curDisplay = document.querySelector("h2.factorDisplay") // document.querySelector("cssSelectorString"); (look up css selectors)
    
    if (curDisplay === null) {
        let factorDisplay = document.createElement("h2")
        factorDisplay.setAttribute("class", "factorDisplay")
        factorDisplay.innerText = factorString
        document.body.appendChild(factorDisplay)
    } else {
        curDisplay.innerText = factorString
    }
}

function displayPrimeFactors() {
    showFactors(calculatePrimeFactors());
}