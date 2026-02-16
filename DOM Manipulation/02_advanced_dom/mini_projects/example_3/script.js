let btn = document.querySelector('button')
let body = document.querySelector('body')

btn.addEventListener('click', (e) => {
    // ✅ Method 1: Simplest
    // Automatically adds if missing, removes if present
    // body.classList.toggle('whole')

    // ✅ Method 2: Manual check with classList.contains
    // if (body.classList.contains('whole')) {
    //     body.classList.remove('whole')
    // } else {
    //     body.classList.add('whole')
    // }

    // ✅ Method 3: Using className directly
    if (body.className === 'whole') {
        body.className = ''   // remove all classes
    } else {
        body.className = 'whole' // replace with only "whole"
    }
})
