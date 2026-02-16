let desBtn = document.querySelector('.desBtn')
let incBtn = document.querySelector('.incBtn')
let counterValue = document.querySelector('.counterValue')
let inputName = document.querySelector('#inputName')
let form = document.querySelector('form');
let text = document.querySelector('.text');

// --- Form Events ---
form.addEventListener('submit',(e) => {
    e.preventDefault()
    // ❌ Problem: e.target.value doesn’t exist here.
    // e.target refers to the <form>, which has no "value".
    // ✅ Fix: use inputName.value to get the text from the input field.
    if(!inputName.value){
        alert('Enter the name!!')
        return;
    }
    text.innerText = inputName.value
})

// --- Decrement Button Event ---
desBtn.addEventListener('click', () => {
    let value = Number(counterValue.innerText)
    if (value <= 1) {
        return; // prevent going below 1
    } 
    counterValue.innerText = value - 1
})

// --- Increment Button Event ---
incBtn.addEventListener('click', () => {
    counterValue.innerText = Number(counterValue.innerText) + 1
})
