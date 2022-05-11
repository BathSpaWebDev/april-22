// document.getElementById('form').addEventListener("submit", function doubleNumber(e) {
//     e.preventDefault();
//     console.log('form submitted');
//     console.log(document.getElementById('numberInput').value);
//     // Get the value from the input element
//     const inputValue = document.getElementById('numberInput').value;
//     const outputValue = inputValue * 2;
//     document.getElementById('output').innerHTML = outputValue;
// })

function doubleNumber() {
    console.log(document.getElementById('numberInput').value);
    // Get the value from the input element
    const inputValue = document.getElementById('numberInput').value;
    const outputValue = inputValue * 2;
    document.getElementById('output').innerHTML = outputValue;
}

// Element.addEventListener('click', nameOfFunction)



// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.