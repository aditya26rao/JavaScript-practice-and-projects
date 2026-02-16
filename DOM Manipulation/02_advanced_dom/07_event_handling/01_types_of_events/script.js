// we can handle Event Handling in 3 ways:-
// 1. Inline method
// 2. Property method
// 3. Listener method (mostly used)

// ===============================
// EVENT HANDLING IN JAVASCRIPT
// ===============================
// We are selecting the first button using its class name
const btn = document.querySelector('.firstBtn');

// -------------------------------------------------
// 2️⃣ PROPERTY METHOD
// -------------------------------------------------
// This assigns a click event using the "onclick" property.
// IMPORTANT:
// - It overrides any existing inline onclick event.
// - Only ONE click handler can exist using this method.
// - If reassigned again, the previous one gets replaced.
btn.onclick = () => {
    console.log("You clicked Property method button!");
};
// 👉 OUTPUT when clicking 1st button:
// "You clicked Property method button!"
// (This overrides the inline onclick from HTML)
// 👉 NOTE:
// The inline "ondblclick" in HTML will still work
// because we did NOT override ondblclick property.

// -------------------------------------------------
// 3️⃣ EVENT LISTENER METHOD (Best Practice)
// -------------------------------------------------

// Selecting second button
let secondBtn = document.querySelector('.secondBtn');
// Adding first event listener
// Multiple listeners can be attached to same event
secondBtn.addEventListener('click', () => {
    console.log('You clicked 1st listener method button!');
});
// 👉 OUTPUT when clicking 2nd button:
// "You clicked 1st listener method button!"
// Creating a separate named function
// This is important if we want to remove the event later
function showConsole() {
    console.log('You clicked 2nd listener method button!');
}
// Adding second listener using function reference
secondBtn.addEventListener('click', showConsole);
// 👉 OUTPUT when clicking 2nd button now:
// "You clicked 1st listener method button!"
// "You clicked 2nd listener method button!"
// (Both will execute because addEventListener allows multiple handlers)

// -------------------------------------------------
// Removing Event Listener
// -------------------------------------------------
// To remove an event listener,
// we MUST pass the exact same event type
// AND the same function reference.
secondBtn.removeEventListener('click', showConsole);
// 👉 After removing, clicking 2nd button will output only:
// "You clicked 1st listener method button!"
// IMPORTANT:
// If we used an anonymous function,
// we would NOT be able to remove it,
// because it has no stored reference.