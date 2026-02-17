// ✅ Create a new <p> element
let p = document.createElement('p')
p.innerHTML = 'Hello from Para 1'

// ❌ If you use style properties individually, they stack
// p.style.backgroundColor = 'black'
// p.style.color = 'white'

// ✅ Using setAttribute('style', '...') overwrites the entire style attribute
// p.setAttribute('style','padding:5px')

// Here you set multiple styles at once
p.setAttribute('style','background-color:black; color:white; padding:9px')

// ✅ Append <p> directly to <body>
document.body.append(p) // final DOM: <body><p style="...">Hello from Para 1</p></body>

// ✅ Create a new <button> element
let btn = document.createElement('button')
btn.innerText = 'Click me'
btn.setAttribute('style','background-color:lightgreen;padding:5px')

// ✅ Insert button before the <p> element
p.insertAdjacentElement('beforebegin',btn)

// ✅ Add another class to the existing div 
let div = document.querySelector('.box') 
div.setAttribute('class', `${div.getAttribute('class')} box2`)