let btn = document.querySelector('button')
let box = document.querySelector('p')
let offBtn = document.getElementById('offButton');

btn.addEventListener('click',() => {
    box.style.backgroundColor = 'yellow'
    box.style.scale = '1'
    console.log('button clicked')
})

offBtn.addEventListener('click',() => {
    box.style.backgroundColor = 'red'
    box.style.scale = '0.5'
})

