document.getElementById('form').addEventListener("submit", function doubleNumber(e) {
    e.preventDefault();
    console.log('form submitted');
    console.log(document.getElementById('numberInput').value);
    // Get the value from the input element
    const inputValue = document.getElementById('numberInput').value;
    const outputValue = inputValue * 2;
    document.getElementById('output').innerHTML = outputValue;
})


// console.log(
//     doubleNumber(5)
// )