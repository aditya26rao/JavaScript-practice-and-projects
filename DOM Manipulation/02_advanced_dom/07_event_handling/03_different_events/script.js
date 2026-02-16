let firstBtn = document.querySelector('.firstBtn')
let box = document.querySelector('.box')
let inputName = document.querySelector('.name')
let form = document.querySelector('form')
let submit = document.querySelector('.submitBtn')
let h1 = document.querySelector('h1')

// --- Button Events ---

// Triggered when the mouse button is pressed down on the element
firstBtn.addEventListener('mousedown', function () {
    console.log('mouse down');
})

// Triggered when the mouse button is released over the element
firstBtn.addEventListener('mouseup', function () {
    console.log('mouse up');
})

// Triggered when a key is pressed (fires after keydown, before keyup)
// Note: `keypress` is deprecated in modern browsers, use `keydown` instead
firstBtn.addEventListener('keypress', function () {
    console.log('key press');
})

// Triggered when a key is released
firstBtn.addEventListener('keyup', function () {
    console.log('key up');
})

// Triggered when a key is pressed down
firstBtn.addEventListener('keydown', function () {
    console.log('key down');
})

// --- Box Events ---

// Triggered when the mouse pointer enters the element’s area
box.addEventListener('mouseenter', () => {
    console.log('mouse enter"s')
})

// Triggered when the mouse pointer leaves the element’s area
box.addEventListener('mouseleave', () => {
    console.log('mouse leave"s')
})

// Triggered when the user right-clicks (opens the context menu) on the element
box.addEventListener('contextmenu', () => {
    console.log('context menu')
})

// --- Form Events ---

// Triggered when the form is submitted
form.addEventListener('submit', (e) => {
    // Prevents the default browser behavior (page reload or navigation)
    e.preventDefault()

    // Logs a message to indicate the form was submitted
    console.log('submitted')

    // Example: You can also access the input value here
    console.log('Name entered:', name.value)
})

// --- Touch Events ---

// Triggered when the user moves their finger across the screen
// while touching the element (like dragging/swiping on mobile)
box.addEventListener('touchmove', () => {
    console.log('Mobile screen touch move')
})

// --- Window Events ---

// Triggered when the user scrolls the page (window/document viewport)
// Fires every time the scroll position changes
window.addEventListener('scroll', () => {
    console.log('screen has been scrolled')
})

// --- Clipboard Events ---

// Triggered when the user copies content from the element
h1.addEventListener('copy', (e) => {
    // e.value does not exist on clipboard events!
    // Instead, you should use e.clipboardData to access copied text.
    // Example: get the selected text from the clipboard
    const copiedText = window.getSelection().toString();
    console.log('Copied text:', copiedText);

    // Or, if you want to manipulate clipboard data directly:
    // e.clipboardData.setData('text/plain', 'Custom text');
    // e.preventDefault(); // prevents default copy behavior
})
