// Select the first element in the DOM with the class "h1Btn"
let btn = document.querySelector('.h1Btn')

// Attach a click event listener to the button
btn.addEventListener('click', (e) => {
    // e.type → logs the type of event ("click")
    // e.target → the element that was actually clicked (could be the button or a child element inside it)
    // e.currentTarget → the element the event listener is bound to (always the button here)
    // e.target.value → the value property of the clicked element (only meaningful if the element has a "value" attribute)
    console.log(e.type, e.target, e.currentTarget, e.target.value)

    // e.clientX and e.clientY → the mouse pointer’s coordinates
    // relative to the visible area of the browser window (viewport)
    // Useful for tracking where on the button (or page) the click occurred
    alert("Coordinates: " + e.clientX + ":" + e.clientY);
})
