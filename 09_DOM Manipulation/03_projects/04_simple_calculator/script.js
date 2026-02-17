// Select the calculator display element from the DOM
let display = document.querySelector('.display')


// Function to append numbers/operators to the display
function appendValue(text) {

    // If display currently shows:
    // 1. "0" (default state)
    // 2. "Error" (previous calculation failed)
    // 3. "Infinity" (division by zero case)
    // Then replace the display with new text instead of appending
    if (display.innerText === "0" || 
        display.innerText === 'Error' ||  
        display.innerText === 'Infinity') {
        
        display.innerText = text
        return; // Stop execution here
    }

    // Otherwise, append the clicked value to existing display content
    display.innerText = `${display.innerText}${text}`
}


// Function to clear the display
function clearDisplay() {
    // Reset display back to default value
    display.innerText = '0'
}


// Function to calculate the result
function calculate() {

    try {
        // Manual check for division by zero
        // If expression contains "/0", show Infinity
        if(display.innerText.includes('/0')){
            display.innerText = 'Infinity'
            return;
        }
        // eval() evaluates the mathematical expression string
        // Example: "2+3*4" → 14
        display.innerText = eval(display.innerText)

    } catch (error) {
        // If expression is invalid (like "5++2")
        // catch block will execute
        display.innerText = 'Error';
    }

}