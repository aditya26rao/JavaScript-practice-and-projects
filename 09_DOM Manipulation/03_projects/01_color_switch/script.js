let randomBtn = document.querySelector('.randomBtn');
let applyBtn = document.querySelector('.applyBtn');
let inputValue = document.querySelector('#colorValue');
let textShow = document.querySelector('#current-color');
let body = document.querySelector('body');

// Apply custom color
applyBtn.addEventListener('click', () => {
    let newColor = inputValue.value.trim().toLowerCase().replace(/\s+/g, '');
    if (newColor) {
        body.style.backgroundColor = newColor;
        textShow.innerText = `Current Color: ${newColor}`;
        textShow.style.color = newColor;
        inputValue.value = '';
    } else {
        alert('Enter any color or hex code');
    }
});


// Generate random color
randomBtn.addEventListener('click', () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    body.style.backgroundColor = color;
    textShow.innerText = `Current Color: ${color}`;
    textShow.style.color = color; // text matches random color
});
