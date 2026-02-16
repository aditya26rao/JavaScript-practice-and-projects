/*
5 Phases og dom manipulation
----------------------------
1. DOM
2. Selection of HTML Elements
3. How to change or manipulate HTML
4. How to change CSS
5. Event Listeners 

*/

let h1 = document.querySelector('h1')
h1.addEventListener('click', (e) => {
   console.log(e.target.value, "h1")
   h1.style.color = 'blue'; // once we click the color will change
   h1.innerHTML = 'Heyy From JS'
})

let p = document.querySelector('#content-para')
// p.innerHTML = 'Hello from JS, learn this Para'

p.style.backgroundColor = 'lightgreen' // CSS Manipulation
p.style.color = 'black'