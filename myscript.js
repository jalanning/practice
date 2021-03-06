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

function sieveUpTo(n) 
{
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

function generateOL(primes) { 
    let primeDisplay = document.createElement("ol")
    primeDisplay.setAttribute("class", "primeDisplay")
    for (let i = 0; i < primes.length; i++) {
        let elm = document.createElement("li");
        elm.innerText = primes[i].toString();
        primeDisplay.append(elm);
    }
    let curDisplay = document.querySelector(".primeDisplay") 
    // document.querySelector("cssSelectorString"); (look up css selectors)
    if (curDisplay === null) document.body.appendChild(primeDisplay);
    else curDisplay.innerHTML = primeDisplay;
}

function accomplishStevesRequest() {
    generateOL(sieveUpTo(document.querySelector(".userInput").value))
}